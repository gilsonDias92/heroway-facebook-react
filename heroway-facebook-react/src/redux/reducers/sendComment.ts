const HTTP_SEND_COMMENT_PENDING = "@sendComment/HTTP_SEND_COMMENT_PENDING";
const HTTP_SEND_COMMENT_SUCCESS = "@sendComment/HTTP_SEND_COMMENT_SUCCESS";
const HTTP_SEND_COMMENT_FAIL = "@sendComment/HTTP_SEND_COMMENT_FAIL";

const INITIAL_STATE = {
  isFetching: false,
  hasErrors: false
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case HTTP_SEND_COMMENT_PENDING:
      return {
        ...state,
        isFetching: true
      };

    case HTTP_SEND_COMMENT_SUCCESS:
      return {
        ...state,
        isFetching: false
      };

    case HTTP_SEND_COMMENT_FAIL:
      return {
        ...state,
        hasErrors: true
      };

    default:
      return state;
  }
}

export function sendComment(postId: string, comment: any) {
  return async function(dispatch, getState) {
    const state = getState();
    const user = state.github.user;

    const body = { comment: comment, login: user.login, avatar_url: user.avatar_url };
    dispatch(sendCommentPending());
    try {
      const url = `https://us-central1-heroway-react-facebook.cloudfunctions.net/app/posts/${postId}/comment`;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      });
      const comments = await response.json();
      dispatch(sendCommentSuccess());
    } catch (e) {
      dispatch(sendCommentFail());
    }
  };
}

function sendCommentPending() {
  return {
    type: HTTP_SEND_COMMENT_PENDING
  };
}

function sendCommentSuccess() {
  return {
    type: HTTP_SEND_COMMENT_SUCCESS
  };
}

function sendCommentFail() {
  return {
    type: HTTP_SEND_COMMENT_FAIL
  };
}
