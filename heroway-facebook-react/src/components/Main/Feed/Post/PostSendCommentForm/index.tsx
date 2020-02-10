import React from "react";
import ReactRedux, { useDispatch } from 'react-redux';
import { setUserTyping } from "../../../../../redux/reducers/profile";

function PostSendComentForm() {
  const dispatch = useDispatch();
  let timeOutId = undefined;

  function handleChange() {

    const isTypingAction = setUserTyping(true);
    dispatch(isTypingAction);
    
    clearTimeout(timeOutId);

    timeOutId = setTimeout(() => {
      dispatch(setUserTyping(false));
    }, 1000)
  }

  return (
    <div className="post-send-comment">
      <div className="post-send-form">
        <input 
        type="text" 
        placeholder="Write your comment"
        onChange={handleChange} />
      </div>
    </div>
  );
}

export default PostSendComentForm;
