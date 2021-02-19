import React from "react";
import { Route, Switch } from "react-router-dom";

import PageNotFound from "./PageNotFound";
import Header from "./common/Header";
import HomePage from "./authentication/HomePage";
import LoginPage from "./authentication/LoginPage";
import SignUpPage from "./authentication/SignUpPage";
import PrivateRoute from "./authentication/PrivateRoute";
import ProfilePage from "./core/ProfilePage";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={SignUpPage} />
        <PrivateRoute path="/profile" component={ProfilePage} />
        <Route component={PageNotFound} />
      </Switch>
    </>
  );
}

export default App;
