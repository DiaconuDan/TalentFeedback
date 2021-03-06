import React from "react";
import { compose } from "recompose";
import { withFirebase } from "../Firebase";
import { withAuthorization } from "../Session";
import CustomizedTable from "./CustomizedTable";
import styled from "styled-components";

const Wrapper = styled.div``;

class Component extends React.Component {
  render() {
    return (
      <Wrapper>
        <CustomizedTable />
      </Wrapper>
    );
  }
}
const condition = authUser => !!authUser;

const Statistics = compose(
  withFirebase,
  withAuthorization(condition)
)(Component);

export default Statistics;
