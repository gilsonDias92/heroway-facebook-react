import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from "./Header";
import Login from "./Main/Login";
import Main from "./Main";

function Routes() {
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

export default Routes;