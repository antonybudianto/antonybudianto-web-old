import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import './AppHeader.css';

const AppHeader = () => (
  <div className="AppHeader">
    <div
      style={{
        padding: 5,
      }}
    >
      <Link to="/" className="btn btn-link btn-menu">
        Antony Budianto
      </Link>
    </div>
    <div className="AppHeaderMenu">
      <NavLink
        exact
        activeClassName="active"
        to="/"
        className="btn btn-link btn-menu"
      >
        <span>Home</span>
      </NavLink>
      <NavLink
        activeClassName="active"
        to="/portfolio"
        className="btn btn-link btn-menu"
      >
        <span>Portfolio</span>
      </NavLink>
      <div
        style={{
          margin: 10,
        }}
      >
        <a
          aria-label="Github"
          style={{
            fontSize: 35,
          }}
          className="white-link"
          href="https://github.com/antonybudianto"
        >
          <i className="fa fa-github" />
        </a>
      </div>
    </div>
  </div>
);

export default AppHeader;
