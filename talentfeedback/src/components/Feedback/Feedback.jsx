import React from "react";
import Loader from "react-loader-spinner";
import { withFirebase } from "../Firebase";
import styled from "styled-components";
import angry from "./angry.svg";
import sad from "./sad.svg";
import neutral from "./neutral.svg";
import happy from "./happy.svg";
import amazing from "./amazing.svg";

const Emoticon = styled.img`
  padding-right: 20px;

  :hover {
    background-color: #ffe4b5;
  }
`;
const FeedbackComment = styled.textarea`
  width: 100%;
  height: 150px;
  padding: 20px 20px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  background-color: #f8f8f8;
  font-size: 16px;
  resize: none;
  margin-top: 30px;
`;

const InterviewQuestion = styled.h1`
  margin-top: 30px;
`;

const Box = styled.div`
  background: white;
  width: 600px;
  border-radius: 6px;
  margin: 0 auto 0 auto;
  padding: 170px 0px 70px 0px;
`;

const Button = styled.button`
  background: #2ecc71;
  width: 150px;
  color: white;
  border-radius: 4px;
  border: #27ae60 1px solid;
  font-weight: 800;
  font-size: 1.5em;
  margin-left: 200px;
  margin-top: 40px;
`;
const INITIAL_STATE = {
  score: "",
  comment: ""
};
class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
    const query = this.props.firebase.feedbacks();
  }

  onSubmit = event => {
    const { comment, score } = this.state;

    alert("Not implemented yet");

    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { comment, score } = this.state;

    return (
      <div>
        <Box>
          <form onSubmit={this.onSubmit}>
            <InterviewQuestion>
              {" "}
              How happy are you with the interview ?
            </InterviewQuestion>
            <Emoticon src={angry} />
            <Emoticon src={sad} />
            <Emoticon src={neutral} />
            <Emoticon src={happy} />
            <Emoticon src={amazing} />

            <InterviewQuestion>
              {" "}
              Would you like to tell us something ?
            </InterviewQuestion>
            <FeedbackComment
              type="text"
              value={comment}
              onChange={this.onChange}
            />

            <Button type="submit">Submit</Button>
          </form>
        </Box>
      </div>
    );
  }
}

const Feedback = withFirebase(Component);

export { Feedback };
