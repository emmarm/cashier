import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import CashierApp from '../components/CashierApp';
import LoginPage from '../components/LoginPage';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={CashierApp} />
      <Route path="/login" component={LoginPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
