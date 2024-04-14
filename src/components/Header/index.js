import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

function Navbar() {
  return (
    <div className="navcon">
      <h1 className="nav-heading">MovieDB</h1>
      <div className="categories">
        <Link to="/">
          <p className="nav-para">Popular</p>
        </Link>
        <Link to="/toprated">
          <p className="nav-para">Top Rated</p>
        </Link>
        <Link to="/upcoming">
          <p className="nav-para">Upcoming</p>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;