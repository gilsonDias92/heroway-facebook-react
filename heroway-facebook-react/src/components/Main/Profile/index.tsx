import React from 'react';
import Typing from './ProfileInfo/Typing';

function ProfileSidebar() {
  return (
    <div className="profile">
      <div className="profile-image">
        <Typing />
        <div className="image-board">
          <img src="img/person1.jpg" alt="Profile Image" />
        </div>
      </div>
      <div className="profile-name">
        <span>Amarilda Curvada</span>
      </div>
      <div className="profile-info">
        <div>
          <span>347</span>
          <span>Followers</span>
        </div>
        <div>
          <span>94</span>
          <span>Following</span>
        </div>
      </div>
    </div>
  );
}

export default ProfileSidebar;