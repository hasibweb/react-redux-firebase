import React from "react";
import { Switch, Route } from "react-router-dom";
import Users from "../page/Users";
import Home from "../page/Home";
import Login from "../page/Login";
import Signup from "../page/Signup";
import { UserIsAuthenticated, UserIsNotAuthenticated } from "../helper/auth";

const Routes = () => {
  return (
    <Switch>
      <Route path="/users" component={UserIsAuthenticated(Users)} />
      <Route path="/login" component={UserIsNotAuthenticated(Login)} />
      <Route path="/signup" component={UserIsNotAuthenticated(Signup)} />
      <Route path="/" component={Home} />
    </Switch>
  );
};

export default Routes;
