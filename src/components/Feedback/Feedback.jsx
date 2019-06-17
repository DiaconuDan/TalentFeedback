import React from "react";
import { withFirebase } from "../Firebase";
import styled from "styled-components";
import angry from "./angry.svg";
import sad from "./sad.svg";
import neutral from "./neutral.svg";
import happy from "./happy.svg";
import amazing from "./amazing.svg";
import moment from "moment";
import "react-notifications/lib/notifications.css";
import {
  NotificationContainer,
  NotificationManager
} from "react-notifications";
const Emoticon = styled.img`
  padding-right: 20px;
  cursor: pointer;
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
  score: 100,
  comment: ""
};
class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { comment, score } = this.state;
    const date = moment()
      .format("L")
      .toString();
    this.props.firebase.feedbacks().add({
      comment,
      score,
      date
    });
    NotificationManager.success("Thank you!", "Feedback was added!");
    this.setState({ ...INITIAL_STATE });
    event.preventDefault();
    event.target.reset();
  };

  onTodoChange(name, value) {
    this.setState({
      [name]: value
    });
  }

  render() {
    const { comment, score } = this.state;

    return (
      <div>
        <Box>
          <NotificationContainer />
          <form onSubmit={this.onSubmit}>
            <InterviewQuestion>
              How happy are you with the interview ?
            </InterviewQuestion>
            <Emoticon
              src={angry}
              onClick={e => this.onTodoChange("score", 0)}
              style={{ backgroundColor: score === 0 && " #ffe4b5" }}
            />
            <Emoticon
              src={sad}
              onClick={e => this.onTodoChange("score", 25)}
              style={{ backgroundColor: score === 25 && " #ffe4b5" }}
            />
            <Emoticon
              src={neutral}
              onClick={e => this.onTodoChange("score", 50)}
              style={{ backgroundColor: score === 50 && " #ffe4b5" }}
            />
            <Emoticon
              src={happy}
              onClick={e => this.onTodoChange("score", 75)}
              style={{ backgroundColor: score === 75 && " #ffe4b5" }}
            />
            <Emoticon
              src={amazing}
              onClick={e => this.onTodoChange("score", 100)}
              style={{ backgroundColor: score === 100 && " #ffe4b5" }}
            />

            <InterviewQuestion>
              Would you like to tell us something ?
            </InterviewQuestion>
            <FeedbackComment
              type="text"
              value={comment}
              onChange={e => this.onTodoChange("comment", e.target.value)}
              required
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
