import React from "react";

import { withFirebase } from "../Firebase";

class Component extends React.Component {
  state = {
    data: []
  };

  constructor(props) {
    super(props);
    const query = this.props.firebase.feedbacks();
  }

  render() {
    const { data } = this.state;

    return (
      <div>
        <h1> Feedbacks..</h1>
        <h2> Test..</h2>
      </div>
    );
  }
}

const Feedback = withFirebase(Component);

export { Feedback };
