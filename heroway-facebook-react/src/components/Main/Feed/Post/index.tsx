import React from "react";
import PostHeader from "./PostHeader";
import PostContent from "./PostContent";
import PostAction from "./PostAction";
import PostComments from "./PostComments";
import PostSendComentForm from "./PostSendCommentForm";
import { IPost } from "../../../../redux/reducers/posts";

interface IProps {
  post: IPost;
}

function Post(props: IProps) {
  return (
    <div className="post">
      <PostHeader
        name={props.post.name}
        date={props.post.date}
        image={props.post.image}
      />
      <PostContent text={props.post.content} postImage={props.post.postImage} />
      <PostAction
        likes={props.post.likes}
        comments={props.post.comments.length}
      />
      <PostComments comments={props.post.comments}/>
      <PostSendComentForm postId={props.post.id}/>  
    </div>
  );
}

export default Post;
