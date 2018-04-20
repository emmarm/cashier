import React from 'react';

const LoginForm = (props) => (
  <form onSubmit={props.onSubmit}>
    <input
      value={props.email}
      onChange={props.onEmailChange}
      type="text"
      placeholder="Email Address"
    />
    <input
      value={props.password}
      onChange={props.onPasswordChange}
      type="password"
      placeholder="Password"
    />
    <button disabled={props.isInvalid} type="submit">
      Log in
    </button>
    {props.error && <p>{props.error.message}</p>}
  </form>
);

export default LoginForm;
