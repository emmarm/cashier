import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <div>
    <div className="container">
      <div className="header">
        <Link className="header__title-link" to="/">
          <h1 className="header__title">Cashier</h1>
        </Link>
        <button className="button--light">Log out</button>
      </div>
    </div>
  </div>
);

export default Header;
