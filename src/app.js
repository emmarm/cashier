import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import 'normalize.css/normalize.css';

import AppRouter from './routers/AppRouter';
import './styles/styles.scss';

Modal.setAppElement('#app');

ReactDOM.render(<AppRouter />, document.getElementById('app'));
