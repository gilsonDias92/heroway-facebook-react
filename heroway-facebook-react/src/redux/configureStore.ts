import * as Redux from "redux";
import * as ReduxDevTools from "redux-devtools-extension";
import changeColorReducer from "./reducers/changeColor";

const rootReducer = Redux.combineReducers({
  changeColor: changeColorReducer,
  another: changeColorReducer,
  anotherOne: changeColorReducer,
});

export type IAppState = ReturnType<typeof rootReducer>;

const store = Redux.createStore(
  rootReducer,
  ReduxDevTools.composeWithDevTools()
);

export default store;

// import * as Redux from "redux";
// import * as ReduxDevTools from "redux-devtools-extension";
// import changeColorReducer, { changeColorAction } from "./reducers/changeColor";

// const rootReducer = Redux.combineReducers({
//   changeColor: changeColorReducer
// });

// const store = Redux.createStore(
//   rootReducer,
//   ReduxDevTools.composeWithDevTools()
// );
// export default store;
