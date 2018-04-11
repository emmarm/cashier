import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <div>
    <Link to="/">
      <h1>Cashier</h1>
    </Link>
    <button>Log out</button>
  </div>
);

export default Header;
