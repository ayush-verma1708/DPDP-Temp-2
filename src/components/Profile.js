import React from 'react';
import './profille.css'
import userLogo from '../assets/user-logo.jpg'; // Import the user logo

const Profile = ({ username, bio }) => {
  return (
    <div className="profile">
      <div className="profile-logo">
        <img src={userLogo} alt="User Logo" width={100} height={100} />
      </div>
      <div className="profile-details">
        <h2>{username}</h2>
        <p>{bio}</p>
      </div>
    </div>
  );
};

export default Profile;
