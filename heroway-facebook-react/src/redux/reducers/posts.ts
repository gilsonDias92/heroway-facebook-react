const GET_POSTS_PENDING = "@posts/HTTP_GET_POSTS_PENDING";
const GET_POSTS_SUCCESS = "@posts/HTTP_GET_POSTS_SUCCESS";
const GET_POSTS_FAIL = "@posts/HTTP_GET_POSTS_FAIL";

export interface IPost {
  id: string,
  likes: number,
  image: string,
  name: string,
  date: string,
  comments: Array<{
    comment: string,
    image: string,
    name: string,
  }>
}

interface IState {
  isFetching: boolean;
  hasErrors: boolean;
  posts: IPost[];
}

const INITIAL_STATE: IState = {
  isFetching: false,
  hasErrors: false,
  posts: []
};

export default function reducer(state = INITIAL_STATE, action) {
  
  switch (action.type) {
    case GET_POSTS_PENDING: {
      return {
        ...state,
        isFetching: true
      };
    }

    case GET_POSTS_SUCCESS: {
      return {
        isFetching: false,
        hasErrors: false,
        posts: action.payload.posts
      };
    }

    case GET_POSTS_FAIL: {
      return {
        isFetching: false,
        hasErrors: true,
        posts: INITIAL_STATE.posts
      };
    }
    default:
      return state;
  }
}

export function getPostsAction() {
  return async function(dispatch: any) {
    const getPostsPendingAction = {
      type: GET_POSTS_PENDING,
      payload: null
    };
    dispatch(getPostsPendingAction);

    try {
      const url =
        "https://us-central1-heroway-react-facebook.cloudfunctions.net/app/posts";
      const response = await fetch(url);
      const posts = await response.json();

      const getPostsSuccessAction = {
        type: GET_POSTS_SUCCESS,
        payload: posts
      };
      dispatch(getPostsSuccessAction);

    } catch (error) {
      const getPostsFailAction = {
        type: GET_POSTS_FAIL,
        payload: null
      };
      dispatch(getPostsFailAction);
      console.log("error!!!");
    }
  };
}