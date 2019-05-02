import React from "react";

import { withFirebase } from "../Firebase";

class Component extends React.Component {
  state = {
    data: []
  };

  constructor(props) {
    super(props);
    const query = this.props.firebase.feedbacks();
    query.get().then(doc => {
      const data = doc.docs.map(doc => doc.data());
      debugger;
      this.setState({
        data
      });
    });
  }

  render() {
    const { data } = this.state;

    return (
      <div>
        <h1> Feedbacks..</h1>
        <h2> Test..</h2>
        {data.map(d => (
          <div>{JSON.stringify(d)}</div>
        ))}
      </div>
    );
  }
}

const Feedback = withFirebase(Component);

export { Feedback };
