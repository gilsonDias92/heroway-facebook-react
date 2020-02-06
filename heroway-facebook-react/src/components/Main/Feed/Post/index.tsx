import React from "react";
import PostHeader from "./PostHeader";
import PostContent from "./PostContent";
import PostAction from "./PostAction";
import PostComents from "./PostComents";
import PostSendComentForm from "./PostSendCommentForm";

function Post() {
  return (
    <div className="post">
      <PostHeader name={"João da Silva"} postDate={"Feb 17 at 10:45PM"} />
      <PostContent />
      <PostAction />
      <PostComents />
      <PostSendComentForm />
    </div>
  );
}

export default Post;
