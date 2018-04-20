import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import 'normalize.css/normalize.css';

import { firebase } from './firebase/firebase';
import CashierApp from './components/CashierApp';
import LoadingPage from './components/LoadingPage';
import './styles/styles.scss';
import registerServiceWorker from './registerServiceWorker';

Modal.setAppElement('#app');

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(<CashierApp />, document.getElementById('app'));
    hasRendered = true;
  }
};

ReactDOM.render(<LoadingPage />, document.getElementById('app'));

firebase.auth().onAuthStateChanged(() => renderApp());

registerServiceWorker();
