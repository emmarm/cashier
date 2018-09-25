import React from 'react';
import PropTypes from 'prop-types';

import LoginFormContainer from './partials/LoginFormContainer';

const LoginPage = (props) => (
  <div>
    <LoginFormContainer handleLogIn={props.handleLogIn} />
  </div>
);

LoginPage.propTypes = {
  handleLogIn: PropTypes.func.isRequired
};

export default LoginPage;
