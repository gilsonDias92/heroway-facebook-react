import React from "react";
import profilePictureComment from "./assets/person3.jpg";
import { IPost } from "../../../../../redux/reducers/posts";

interface IProps {
  comments: IPost["comments"];
}

function PostComments(props: IProps) {
  return (
    <div className="post-comments">
      {props.comments.map((comment, index) => {
        return (
          <div className="comment" key={index}>
            <div className="comment-profile-image">
              <div className="comment-image-board">
                <img src={comment.image} alt="Profile Image" />
              </div>
            </div>
            <div className="comment-content">
              <div className="comment-profile-name">{comment.name}</div>
              <div className="comment-text">
                {comment.comment}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default PostComments;
