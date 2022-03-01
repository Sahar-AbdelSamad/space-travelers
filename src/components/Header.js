import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="header">
    {/* <Link to="/" className="profile"><img src="../assets/logo.png" alt="fantastic-logo"/>
    </Link> */}
    <Link to="/" style={{ textDecoration: 'none' }}><h1 className="logo">Space Travelers&apos; Hub</h1></Link>
    <nav className="nav">
      <ul className="navBar">
        <li className="nav-link books">
          <Link to="/" style={{ textDecoration: 'none' }}>ROCKETS</Link>
        </li>
        <li className="nav-link categories">
          <Link to="missions" style={{ textDecoration: 'none' }}>MISSIONS</Link>
        </li>
        <li className="nav-link categories">
          <Link to="myProfile" style={{ textDecoration: 'none' }}>My Profile</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
