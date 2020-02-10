import React from "react";
import postImage from './assets/post-image.jpg';
import { IPost } from "../../../../../redux/reducers/posts";

interface IProps {
  text: string
  image: string
}

function PostContent(props: IProps) {
  return (
    <>
      <div className="post-content">
        {props.text}
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
