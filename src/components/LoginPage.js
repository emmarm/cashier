import React from 'react';

import LoginFormContainer from './partials/LoginFormContainer';

const LoginPage = (props) => (
  <div>
    <h1>Log in</h1>
    <LoginFormContainer handleLogIn={props.handleLogIn} />
  </div>
);

export default LoginPage;
