import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import { MdClose } from 'react-icons/md';
import './Header.css';

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };
  const closeMenu = () => {
    setNavbarOpen(false);
  };
  return (
    <header className="header">
      <NavLink to="/">
        <div className="fantastic-logo" />
        <h1 className="logo">Space Travelers&apos; Hub</h1>
      </NavLink>
      <nav className="nav mobile-nav">
        <button type="button" onClick={handleToggle}>
          {navbarOpen ? (
            <MdClose style={{ color: '#fff', width: '40px', height: '40px' }} />
          ) : (
            <FiMenu style={{ color: '#7b7b7b', width: '40px', height: '40px' }} />
          )}
        </button>
        <ul className={`menuNav ${navbarOpen ? ' showMenu navBar' : 'navBar'}`}>
          <li className="nav-link">
            <NavLink
              to="/"
              activeClassName="active-link"
              onClick={() => closeMenu()}
              exact
            >
              Rockets
            </NavLink>
          </li>
          <li className="nav-link missions">
            <NavLink
              to="missions"
              activeClassName="active-link"
              onClick={() => closeMenu()}
              exact
            >
              Missions
            </NavLink>
          </li>
          <li className="nav-link">
            <NavLink
              to="myProfile"
              activeClassName="active-link"
              onClick={() => closeMenu()}
              exact
            >
              My Profile
            </NavLink>
          </li>
        </ul>
      </nav>
      <nav className="nav desktop-nav">
        <ul className="navBar">
          <li className="nav-link">
            <NavLink
              to="/"
            >
              Rockets
            </NavLink>
          </li>
          <li className="nav-link missions">
            <NavLink
              to="missions"
            >
              Missions
            </NavLink>
          </li>
          <li className="nav-link">
            <NavLink
              to="myProfile"
            >
              My Profile
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
