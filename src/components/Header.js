import { NavLink } from 'react-router-dom';

const Header = () => (
  <header className="header">
    <NavLink to="/Rockets">Rockets</NavLink>
    <NavLink to="/Missions">Missions</NavLink>
    <NavLink to="/MyProfile">My Profile</NavLink>
  </header>
);

export default Header;
