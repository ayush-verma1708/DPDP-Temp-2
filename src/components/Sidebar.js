import React from 'react';
import './Sidebar.css';
import logo from '../assets/logo.png'; // Import the logo

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" /> {/* Use the logo */}
      </div>
      <ul>
        <li>Dashboard</li>
        <li>Upload Scanned Results</li>
        <li>IT Assets Management</li>
        <li>Compliance Configuration</li>
        <li>Compliance Score Overview</li>
        <li>Reports</li>
        <li>Evidence Repository</li>
        <li>User Management</li>
        <li>Notification</li>
        <li>Settings</li>
      </ul>
    </div>
  );
};

export default Sidebar; // Ensure there's only one default export
