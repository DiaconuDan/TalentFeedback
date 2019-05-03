import React from "react";
import { Link } from "react-router-dom";
import SignOutButton from "../SignOut/SignOut";
import styled from "styled-components";
import * as ROUTES from "../../constants/routes";
import { AuthUserContext } from "../Session/index";

const Wrapper = styled.div`
background-color: #6441A5'
`;

const Navigation = () => (
  <Wrapper>
    <AuthUserContext.Consumer>
      {authUser => authUser && <NavigationAuth />}
    </AuthUserContext.Consumer>
  </Wrapper>
);

const NavigationAuth = () => (
  <ul>
    <Link to={ROUTES.SIGN_IN}>
      <SignOutButton />
    </Link>
  </ul>
);

export default Navigation;
