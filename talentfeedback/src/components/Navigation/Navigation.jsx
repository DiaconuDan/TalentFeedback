import React from "react";
import { Link } from "react-router-dom";
import SignOutButton from "../SignOut/SignOut";

import * as ROUTES from "../../constants/routes";
import { AuthUserContext } from "../Session/index";

const Navigation = () => (
  <div>
    <AuthUserContext.Consumer>
      {authUser => authUser && <NavigationAuth />}
    </AuthUserContext.Consumer>
  </div>
);

const NavigationAuth = () => (
  <ul>
    <li>
      <Link to={ROUTES.SIGN_IN}>
        <SignOutButton />
      </Link>
    </li>
  </ul>
);

export default Navigation;
