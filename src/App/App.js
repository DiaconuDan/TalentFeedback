import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as ROUTES from "../constants/routes";
import { withAuthentication } from "../components/Session/index";

const Feedback = lazy(() => import("../components/Feedback/Feedback"));
const Navigation = lazy(() => import("../components/Navigation/Navigation"));
const Statistics = lazy(() => import("../components/Statistics/Statistics"));
const SignIn = lazy(() => import("../components/SignIn/SignIn"));

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Navigation />
      <Switch>
        <Route exact path={ROUTES.LANDING} component={SignIn} />
        <Route path={ROUTES.SIGN_IN} component={SignIn} />
        <Route path={ROUTES.STATISTICS} component={Statistics} />
        <Route path={ROUTES.FEEDBACK} component={Feedback} />
      </Switch>
    </Suspense>
  </Router>
);

export default withAuthentication(App);
