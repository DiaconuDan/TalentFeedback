import React from "react";

import { withFirebase } from "../Firebase";

import styled from "styled-components";

const RightAlign = styled.button`
  float: right;
  margin-top: -35px;
  margin-right: 10px;
`;

const SignOutButton = ({ firebase }) => (
  <RightAlign type="button" onClick={firebase.doSignOut}>
    Sign Out
  </RightAlign>
);

export default withFirebase(SignOutButton);
