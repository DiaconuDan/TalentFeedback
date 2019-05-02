import React from "react";
import { withAuthorization, AuthUserContext } from "../Session";

export const Statistics = () => (
  <AuthUserContext.Consumer>
    {authUser => (
      <div>
        <h1>Account: {authUser.email}</h1>
        <h1>Statistics..</h1>
      </div>
    )}
  </AuthUserContext.Consumer>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Statistics);
