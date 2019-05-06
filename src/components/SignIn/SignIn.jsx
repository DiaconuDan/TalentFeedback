import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { withFirebase } from "../Firebase";
import * as ROUTES from "../../constants/routes";

const Wrapper = styled.div`
  text-align: center;
  font-family: "Open Sans", sans-serif;

  margin: 0 auto 0 auto;
  width: 100%;
  text-align: center;
  margin: 300px 0px 20px 0px;
`;

const Email = styled.input`
  background: #ecf0f1;
  border: #ccc 1px solid;
  border-bottom: #ccc 2px solid;
  padding: 8px;
  width: 250px;
  color: #aaaaaa;
  margin-top: 10px;
  font-size: 1em;
  border-radius: 4px;
`;

const Password = styled.input`
  border-radius: 4px;
  background: #ecf0f1;
  border: #ccc 1px solid;
  padding: 8px;
  width: 250px;
  font-size: 1em;
`;

const Button = styled.button`
  background: #2ecc71;
  width: 125px;
  padding-top: 5px;
  padding-bottom: 5px;
  color: white;
  border-radius: 4px;
  border: #27ae60 1px solid;

  margin-top: 20px;
  margin-bottom: 20px;
  float: left;
  margin-left: 85px;
  font-weight: 800;
  font-size: 0.8em;
`;

const Box = styled.div`
  background: white;
  width: 300px;
  border-radius: 6px;
  margin: 0 auto 0 auto;
  padding: 0px 0px 70px 0px;
`;

const Error = styled.p``;

const SignIn = () => (
  <Wrapper>
    <h1>SignIn</h1>
    <SignInForm />
  </Wrapper>
);

const INITIAL_STATE = {
  email: "",
  password: "",
  error: null
};

class SignInFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email, password } = this.state;

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.STATISTICS);
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, password, error } = this.state;

    const isInvalid = password === "" || email === "";

    return (
      <div>
        <Box>
          <form onSubmit={this.onSubmit}>
            <Email
              name="email"
              value={email}
              onChange={this.onChange}
              type="text"
              placeholder="Email Address"
            />
            <Password
              name="password"
              value={password}
              onChange={this.onChange}
              type="password"
              placeholder="Password"
            />

            <Button disabled={isInvalid} type="submit">
              Sign In
            </Button>
          </form>
        </Box>
        <Link to={ROUTES.FEEDBACK}>Go to feedbacks</Link>
        {error && <Error>{error.message}</Error>}
      </div>
    );
  }
}

export const SignInForm = compose(
  withRouter,
  withFirebase
)(SignInFormBase);

export default SignIn;
