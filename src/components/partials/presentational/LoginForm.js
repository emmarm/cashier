import React from 'react';
import PropTypes from 'prop-types';

const LoginForm = (props) => (
  <div className="container login-page">
    <form
      className="login-form"
      onSubmit={props.onSubmit}
    >
      <h2 className="login-form__title">Log in</h2>
      <input
        className="login-form__email"
        value={props.email}
        onChange={props.onEmailChange}
        type="text"
        placeholder="Email Address"
      />
      <input
        className="login-form__password"
        value={props.password}
        onChange={props.onPasswordChange}
        type="password"
        placeholder="Password"
      />
      <button
        className="button--main-action login-form__submit-button"
        disabled={props.isInvalid}
        type="submit"
      >
        Log in
      </button>
      {props.error && <p className="login-form__error">{props.error.message}</p>}
    </form>
  </div>
);

LoginForm.defaultProps = {
  error: null
};

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  onEmailChange: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  onPasswordChange: PropTypes.func.isRequired,
  isInvalid: PropTypes.bool.isRequired,
  error: PropTypes.string
};

export default LoginForm;
