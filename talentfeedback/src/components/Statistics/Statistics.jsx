import React from "react";
import { compose } from "recompose";
import { withFirebase } from "../Firebase";
import { withAuthorization } from "../Session";
import CustomizedTable from "./CustomizedTable";
import styled from "styled-components";

const Wrapper = styled.div``;
const Header = styled.h1`
  text-align: center;
`;
class Component extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Wrapper>
        {/* <Header>Statistics..</Header> */}
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
