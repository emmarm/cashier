import React from 'react';
import { Link } from 'react-router';

const NotFoundPage = () => (
  <div>
    <p>Page Not Found</p>
    <Link to="/">Home</Link>
  </div>
);

export default NotFoundPage;
