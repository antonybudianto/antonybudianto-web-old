import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const AppHeader = () =>
  <div style={{
    display: 'flex',
    width: '100%',
    height: '50px',
    zIndex: 1,
    left: 0,
    top: 0,
    position: 'fixed',
    justifyContent: 'space-between',
    backgroundColor: 'black',
    color: 'white',
    textAlign: 'right'
  }}>
    <div style={{
      padding: 5
    }}>
      <Link to="/" className="btn btn-link btn-menu">Antony Budianto</Link>
    </div>
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: 5
    }}>
      <NavLink exact activeClassName="active" to="/" className="btn btn-link btn-menu">
        <span>Home</span>
      </NavLink>
      <NavLink activeClassName="active" to="/portfolio" className="btn btn-link btn-menu">
        <span>Portfolio</span>
      </NavLink>
      <div style={{
        marginLeft: 20
      }}>
        <a style={{
          fontSize: 35
        }} className="white-link" href="https://github.com/antonybudianto">
          <i className="fa fa-github"></i>
        </a>
      </div>
    </div>
  </div>

export default AppHeader;
