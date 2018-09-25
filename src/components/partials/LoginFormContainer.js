import React, { Component } from 'react';
import PropTypes from 'prop-types';

import LoginForm from './presentational/LoginForm';

const defaultState = {
  email: '',
  error: null,
  password: ''
};

class LoginFormContainer extends Component {
  state = { ...defaultState };

  onSubmit = e => {
    e.preventDefault();

    const { email, password } = this.state;

    this.props.handleLogIn(email, password);
  };
  onEmailChange = e => {
    const email = e.target.value;
    this.setState(() => ({ email }));
  };
  onPasswordChange = e => {
    const password = e.target.value;
    this.setState(() => ({ password }));
  };
  render() {
    const { email, password, error } = this.state;
    const isInvalid = password === '' || email === '';
    return (
      <LoginForm
        email={email}
        error={error}
        isInvalid={isInvalid}
        onEmailChange={this.onEmailChange}
        onPasswordChange={this.onPasswordChange}
        onSubmit={this.onSubmit}
        password={password}
      />
    );
  }
}

LoginFormContainer.propTypes = {
  handleLogIn: PropTypes.func.isRequired
};

export default LoginFormContainer;
