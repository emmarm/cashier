import React from 'react';
import PropTypes from 'prop-types';

const LoginForm = props => (
  <div className="container login-page">
    <form className="login-form" onSubmit={props.onSubmit}>
      <h2 className="login-form__title">Log in</h2>
      <input
        className="login-form__email"
        onChange={props.onEmailChange}
        placeholder="Email Address"
        type="text"
        value={props.email}
      />
      <input
        className="login-form__password"
        onChange={props.onPasswordChange}
        placeholder="Password"
        type="password"
        value={props.password}
      />
      <button
        className="button--main-action login-form__submit-button"
        disabled={props.isInvalid}
        type="submit"
      >
        Log in
      </button>
      {props.error && (
        <p className="login-form__error">{props.error.message}</p>
      )}
    </form>
  </div>
);

LoginForm.defaultProps = {
  error: null
};

LoginForm.propTypes = {
  email: PropTypes.string.isRequired,
  error: PropTypes.string,
  isInvalid: PropTypes.bool.isRequired,
  onEmailChange: PropTypes.func.isRequired,
  onPasswordChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired
};

export default LoginForm;
