import React from "react";

interface IProps {
  image: string,
  name: string,
  date: string
}

function PostHeader(props: IProps) {
  return (
    <div className="post-header">
      <div className="post-header-profile-image">
        <div className="post-header-image-board">
          <img src={props.image} alt="Profile Image" />
        </div>
      </div>
      <div className="post-header-profile-name">
  <div className="profile-name">{props.name}</div>
  <div className="post-date">{props.date}</div>
      </div>
    </div>
  );
}

export default PostHeader;