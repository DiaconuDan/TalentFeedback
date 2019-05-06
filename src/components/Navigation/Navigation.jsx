import React, { Suspense, lazy } from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import AuthUserContext from "../Session/context";
const SignOutButton = lazy(() => import("../SignOut/SignOut"));

const NavigationAuth = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Link to={ROUTES.SIGN_IN}>
      <SignOutButton style={{ backgroundColor: "#6441A5" }} />
    </Link>
  </Suspense>
);

const Navigation = () => (
  <AuthUserContext.Consumer>
    {authUser => authUser && <NavigationAuth />}
  </AuthUserContext.Consumer>
);

export default Navigation;
