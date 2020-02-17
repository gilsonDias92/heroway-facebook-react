import React from "react";
import ReactRedux, { useDispatch } from "react-redux";
import { setUserTyping } from "../../../../../redux/reducers/profile";
import { sendComment } from "../../../../../redux/reducers/sendComment";
import { IPost } from "../../../../../redux/reducers/posts";

interface IProps {
  postId: IPost["id"];
}

let timeOutId = undefined;
function PostSendComentForm(props: IProps) {
  const dispatch = useDispatch();

  const [comment, setComment] = React.useState("");

  function saveComment(event) {
    if (event.key === 'Enter') {
      const inputValue = event.target.value;
      setComment(inputValue);
      debugger;
      
      const reduxAction = sendComment(props.postId, inputValue);
      dispatch(reduxAction);
    }
  }

  function handleTyping() {
    const isTypingAction = setUserTyping(true);
    dispatch(isTypingAction);

    clearTimeout(timeOutId);

    timeOutId = setTimeout(() => {
      dispatch(setUserTyping(false));
    }, 1000);
  }

  return (
    <div className="post-send-comment">
      <div className="post-send-form">
        <input
          type="text"
          placeholder="Write your comment"
          onChange={handleTyping}
          onKeyPress={saveComment}
        />
      </div>
    </div>
  );
}

export default PostSendComentForm;
