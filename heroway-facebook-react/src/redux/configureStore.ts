import * as Redux from "redux";
import ReduxThunk from 'redux-thunk';
import * as ReduxDevTools from "redux-devtools-extension";

import profileReducer from "./reducers/profile";
import postsReducer from "./reducers/posts";

const state = {
  profile: profileReducer,
  posts: postsReducer
}

const rootReducer = Redux.combineReducers({
  profile: profileReducer,
  posts: postsReducer

});

export type IAppState = ReturnType<typeof rootReducer>;

const store = Redux.createStore(
  rootReducer,
  ReduxDevTools.composeWithDevTools(
    Redux.applyMiddleware(ReduxThunk)
  ),
);

export default store;
