import React from "react";
import * as ReactRedux from "react-redux";

import Post from "./Post";
import { getPostsAction, IPost } from "../../../redux/reducers/posts";
import { IAppState } from "../../../redux/configureStore";

function Feed() {
  const dispatch = ReactRedux.useDispatch();
  const postsState = ReactRedux.useSelector((state: IAppState) => {
    return state.posts;
  });

  React.useEffect(() => {
    dispatch(getPostsAction());
  }, []);

  return (
    <div className="feed">
      <div className="container">
        {postsState.posts.map((post: IPost) => {
          return <Post post={post} key={post.id} />;
        })}
      </div>
    </div>
  );
}

export default Feed;
