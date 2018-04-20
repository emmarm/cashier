import firebase from 'firebase';

const prodConfig = {
  apiKey: process.env.FIREBASE_API_KEY_PROD,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN_PROD,
  databaseURL: process.env.FIREBASE_DATABASE_URL_PROD,
  projectId: process.env.FIREBASE_PROJECT_ID_PROD,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET_PROD,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID_PROD
};

const devConfig = {
  apiKey: process.env.FIREBASE_API_KEY_DEV,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN_DEV,
  databaseURL: process.env.FIREBASE_DATABASE_URL_DEV,
  projectId: process.env.FIREBASE_PROJECT_ID_DEV,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET_DEV,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID_DEV
};

const config = process.env.NODE_ENV === 'production' ? prodConfig : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const database = firebase.database();

export { firebase, database as default };
