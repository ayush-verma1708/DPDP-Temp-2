import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header>
      <input type="text" placeholder="Search for anything..." />
      <div className="user-info">
        <span className="bell-icon">🔔</span>
        <div className="user-details">
          <span>User</span>
          <span>Product Manager</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
