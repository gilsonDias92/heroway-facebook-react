import * as Redux from "redux";
import ReduxThunk from 'redux-thunk';
import * as ReduxDevTools from "redux-devtools-extension";

import profileReducer from "./reducers/profile";
import postsReducer from "./reducers/posts";
import githubReducer from "./reducers/github";

const state = {
  profile: (state: any, action: any) => profileReducer(state, action),
  posts: (state: any, action: any) => postsReducer(state, action),
  github: (state: any, action: any) => githubReducer(state, action)
}

const rootReducer = Redux.combineReducers(state);

export type IAppState = ReturnType<typeof rootReducer>;

const store = Redux.createStore(
  rootReducer,
  ReduxDevTools.composeWithDevTools(
    Redux.applyMiddleware(ReduxThunk)
  ),
);

export default store;
