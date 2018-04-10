import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

import AppRouter from './routers/AppRouter';

Modal.setAppElement('#app');

ReactDOM.render(<AppRouter />, document.getElementById('app'));
