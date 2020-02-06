import React from "react";
import postImage from './assets/post-image.jpg';

function PostContent() {
  return (
    <>
      <div className="post-content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend id
        massa quis condimentum. Maecenas malesuada, mi id tempus consequat, ex
        nunc rhoncus arcu, at vehicula lorem mi eu magna.
      </div>
      <div className="post-image">
        <div className="post-image-board">
          <img src={postImage} alt="Profile Image" />
        </div>
      </div>
    </>
  );
}

export default PostContent;
