import React from "react";
import profilePicture from "./assets/person2.jpg";

interface IPostHeader {
  name: string;
  postDate: string;
}

function PostHeader(props: IPostHeader) {
  return (
    <div className="post-header">
      <div className="post-header-profile-image">
        <div className="post-header-image-board">
          <img src={profilePicture} alt="Profile Image" />
        </div>
      </div>
      <div className="post-header-profile-name">
        <div className="profile-name">{props.name}</div>
        <div className="post-date">{props.postDate}</div>
      </div>
    </div>
  );
}

export default PostHeader;
