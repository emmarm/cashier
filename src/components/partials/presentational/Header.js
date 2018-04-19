import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <div className="header">
    <Link className="header__title-link" to="/">
      <h1 className="header__title">Cashier</h1>
    </Link>
    <button className="button--secondary-action">Log out</button>
  </div>
);

export default Header;
