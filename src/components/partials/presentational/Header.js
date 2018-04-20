import React from 'react';

const Header = (props) => (
  <div className="header">
    <h1 className="header__title">
      Cashier
    </h1>
    <button
      onClick={props.handleLogOut}
      className="button--secondary-action"
    >
      Log out
    </button>
  </div>
);

export default Header;
