import React from "react";
import { Link } from "react-router-dom";
import SignOutButton from "../SignOut/SignOut";

import * as ROUTES from "../../constants/routes";
import { AuthUserContext } from "../Session/index";

const Navigation = () => (
  <div>
    <AuthUserContext.Consumer>
      {authUser => (authUser ? <NavigationAuth /> : <NavigationNonAuth />)}
    </AuthUserContext.Consumer>
  </div>
);

const NavigationAuth = () => (
  <ul>
    <li>
      <Link to={ROUTES.STATISTICS}>Statistics</Link>
    </li>
    <li>
      <SignOutButton />
    </li>
  </ul>
);

const NavigationNonAuth = () => (
  <ul>
    <li>
      <Link to={ROUTES.SIGN_IN}>Sign In</Link>
    </li>
  </ul>
);

export default Navigation;
