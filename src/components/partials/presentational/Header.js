import React from 'react';
import PropTypes from 'prop-types';

const Header = props => (
  <div className="header">
    <h1 className="header__title">Cashier</h1>
    <button className="button--secondary-action" onClick={props.handleLogOut}>
      Log out
    </button>
  </div>
);

Header.propTypes = {
  handleLogOut: PropTypes.func.isRequired
};

export default Header;
