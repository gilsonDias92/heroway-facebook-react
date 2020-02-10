import React from "react";
import Post from "./Post";
import Button from "../../Button";

function Feed() {
  return (
    <div className="feed">
      <div className="container">
        <Post />
        <Button />
      </div>
    </div>
  );
}

export default Feed;
