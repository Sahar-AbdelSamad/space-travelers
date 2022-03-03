import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FiMenu } from 'react-icons/fi';
import { MdClose } from 'react-icons/md';
import { handleToggle } from '../redux/mobileMenu/mobileMenu';
import './Header.css';

const Header = () => {
  const menu = useSelector((state) => state.mobileMenuReducer);
  const dispatch = useDispatch();
  return (
    <header className="header">
      <NavLink to="/">
        <div className="fantastic-logo" />
        <h1 className="logo">Space Travelers&apos; Hub</h1>
      </NavLink>
      <nav className="navig mobile-navig">
        <button type="button" onClick={() => dispatch(handleToggle(menu.visibleMobileMenu))}>
          {menu.visibleMobileMenu ? (
            <MdClose style={{ color: '#fff', width: '40px', height: '40px' }} />
          ) : (
            <FiMenu style={{ color: '#7b7b7b', width: '40px', height: '40px' }} />
          )}
        </button>
        <ul className={`menuNav ${menu.visibleMobileMenu ? ' showMenu navBar' : 'navBar'}`}>
          <li className="nav-link">
            <NavLink
              to="/"
              onClick={() => dispatch(handleToggle(menu.visibleMobileMenu))}
            >
              Rockets
            </NavLink>
          </li>
          <li className="nav-link missions">
            <NavLink
              to="missions"
              onClick={() => dispatch(handleToggle(menu.visibleMobileMenu))}
            >
              Missions
            </NavLink>
          </li>
          <li className="nav-link">
            <NavLink
              to="myProfile"
              onClick={() => dispatch(handleToggle(menu.visibleMobileMenu))}
            >
              My Profile
            </NavLink>
          </li>
        </ul>
      </nav>
      <nav className="navig desktop-navig">
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
