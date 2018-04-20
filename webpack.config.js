const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const dotenv = require('dotenv').config();

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = (env) => {
  const isProduction = env === 'production';
  const CSSExtract = new ExtractTextPlugin('styles.css');

  return {
    entry: ['babel-polyfill', './src/app.js'],
    output: { path: path.join(__dirname, 'public', 'dist'), filename: 'bundle.js' },
    module: {
      rules: [{
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }, {
        test: /\.s?css$/,
        use: CSSExtract.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }
          ]
        })
      }]
    },
    plugins: [CSSExtract, new webpack.EnvironmentPlugin([
      'FIREBASE_API_KEY_DEV',
      'FIREBASE_AUTH_DOMAIN_DEV',
      'FIREBASE_DATABASE_URL_DEV',
      'FIREBASE_PROJECT_ID_DEV',
      'FIREBASE_STORAGE_BUCKET_DEV',
      'FIREBASE_MESSAGING_SENDER_ID_DEV',
      'FIREBASE_API_KEY_PROD',
      'FIREBASE_AUTH_DOMAIN_PROD',
      'FIREBASE_DATABASE_URL_PROD',
      'FIREBASE_PROJECT_ID_PROD',
      'FIREBASE_STORAGE_BUCKET_PROD',
      'FIREBASE_MESSAGING_SENDER_ID_PROD'
    ])],
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    devServer: { contentBase: path.join(__dirname, 'public'), historyApiFallback: true, publicPath: '/dist/' }
  };
};
