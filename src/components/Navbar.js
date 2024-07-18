import React from 'react'
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo.png'; // Import the logo
import Profile from './Profile';

const Navbar= () => {
  return (
    
    <div className="navbar">
    <div className="navbar-logo">
      <img src={logo} alt="Logo" width={100} height={100} />
    </div>
    <div className="navbar-links">
      <NavLink to="/home" activeClassName="active">Home</NavLink>
      <NavLink to="/about" activeClassName="active">About</NavLink>
      <NavLink to="/policy" activeClassName="active">Policy</NavLink>
      <NavLink to="/contact" activeClassName="active">Contact</NavLink>
    </div>
    <Profile username="John Doe" bio="A short bio about John Doe." />
  </div>
  
  );
}

export default Navbar
