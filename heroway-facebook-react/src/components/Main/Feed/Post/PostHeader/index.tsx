import React from "react";
import profilePicture from "./assets/person2.jpg";

function PostHeader() {
  return (
    <div className="post-header">
      <div className="post-header-profile-image">
        <div className="post-header-image-board">
          <img src={profilePicture} alt="Profile Image" />
        </div>
      </div>
      <div className="post-header-profile-name">
        <div className="profile-name">João da Silva</div>
        <div className="post-date">Feb 17 at 10:45PM</div>
      </div>
    </div>
  );
}

export default PostHeader;
