import React from 'react';
import './Sidebar.css';
import { NavLink } from 'react-router-dom';
//import logo from '../assets/logo.png'; // Import the logo

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
         <li>
          <NavLink to="/dashboard"  activeClassName="active">Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="/upload-scanned-results"  activeClassName="active">Upload Scanned Results</NavLink>
        </li>
        <li>
          <NavLink to="/it-assets-management"  activeClassName="active">IT Assets Management</NavLink>
        </li>
        <li>
          <NavLink to="/compliance-configuration"  activeClassName="active">Compliance Configuration</NavLink>
        </li>
        <li>
          <NavLink to="/compliance-score-overview"  activeClassName="active">Compliance Score Overview</NavLink>
        </li>
        <li>
          <NavLink to="/reports"  activeClassName="active">Reports</NavLink>
        </li>
        <li>
          <NavLink to="/evidence-repository"  activeClassName="active">Evidence Repository</NavLink>
        </li>
        <li>
          <NavLink to="/user-management"  activeClassName="active">User Management</NavLink>
          
        </li>
        <li>
          <NavLink to="/notification"  activeClassName="active">Notification</NavLink>
        </li>
        <li>
          <NavLink to="/settings"  activeClassName="active">Settings</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar; // Ensure there's only one default export
