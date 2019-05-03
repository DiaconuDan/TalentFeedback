import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { withFirebase } from "../Firebase";
import { compose } from "recompose";
import styled from "styled-components";

const Header = styled.h1`
  text-align: center;
  margin-top: 50px;
`;

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

const styles = theme => ({
  root: {
    width: "80%",
    marginTop: 50,
    overflowX: "auto",
    marginLeft: 230
  },
  table: {
    minWidth: 700
  },
  row: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default
    }
  }
});

class Component extends React.Component {
  state = {
    data: []
  };
  constructor(props) {
    super(props);
    const query = this.props.firebase.feedbacks();
    query.get().then(doc => {
      const data = doc.docs.map(doc => doc.data());
      this.setState({
        data
      });
    });
  }

  getAvgScore(rows) {
    let score = 0;
    rows.forEach(row => {
      score += Number(row.score);
    });
    return Math.round(score / rows.length);
  }
  render() {
    const { classes } = this.props;
    const { data } = this.state;
    const score = this.getAvgScore(data);
    const feedbacksNumber = data.length;

    return (
      <div>
        <Header>
          {" "}
          Average score of {score} from {feedbacksNumber} feedbacks
        </Header>
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <CustomTableCell>Score</CustomTableCell>
                <CustomTableCell align="left">Date</CustomTableCell>
                <CustomTableCell align="right">Comment</CustomTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map(row => {
                return (
                  <TableRow className={classes.row} key={Math.random()}>
                    <CustomTableCell component="th" scope="row">
                      {row.score}
                    </CustomTableCell>
                    <CustomTableCell align="left">
                      {row.date.toDate().toDateString()}
                    </CustomTableCell>
                    <CustomTableCell align="right">
                      {row.comment}
                    </CustomTableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }
}

const CustomizedTable = compose(
  withFirebase,
  withStyles(styles)
)(Component);

CustomizedTable.propTypes = {
  classes: PropTypes.object.isRequired
};

export default CustomizedTable;
