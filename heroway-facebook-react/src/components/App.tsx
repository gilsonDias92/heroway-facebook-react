import React from "react";
import * as ReactRedux from "react-redux";

import Routes from "./Routes";
import store from "../redux/configureStore";

function App() {
  return (
    <ReactRedux.Provider store={store}>
      <Routes />
    </ReactRedux.Provider>
  );
}

export default App;
