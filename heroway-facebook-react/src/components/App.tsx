import React from "react";
import Header from "./Header";
import Main from "./Main";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./Main/Login";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
      <Route exact={true} path="/">
          <Login />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/feed">
          <Main />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
