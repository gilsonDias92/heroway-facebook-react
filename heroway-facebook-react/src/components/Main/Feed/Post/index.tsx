import React from "react";
import PostHeader from "./PostHeader";
import PostContent from "./PostContent";
import PostAction from "./PostAction";
import PostComents from "./PostComents";
import PostSendComentForm from "./PostSendCommentForm";

function Post() {
  return (
    <div className="post">
      <PostHeader />
      <PostContent />
      <PostAction />
      <PostComents />
      <PostSendComentForm />
    </div>
  );
}

export default Post;
