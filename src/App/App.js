import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Navigation from "../components/Navigation/Navigation";
import Statistics from "../components/Statistics/Statistics";
import { SignIn } from "../components/SignIn/SignIn";
import { Feedback } from "../components/Feedback/Feedback";
import * as ROUTES from "../constants/routes";
import { withAuthentication } from "../components/Session/index";

const App = () => (
  <div>
    <Navigation />
    <Switch>
      <Route exact path={ROUTES.LANDING} component={SignIn} />
      <Route path={ROUTES.SIGN_IN} component={SignIn} />
      <Route path={ROUTES.STATISTICS} component={Statistics} />
      <Route path={ROUTES.FEEDBACK} component={Feedback} />
    </Switch>
  </div>
);

export default withAuthentication(App);
