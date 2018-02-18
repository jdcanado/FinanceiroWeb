//CommentBox.js
import React, { Component } from "react";
import style from "./style";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Paper from "material-ui/Paper";
import * as colors from "material-ui/colors";

const bgColorPaper = colors["green"]["A400"];
const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 1,
    width: "100%"
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  card: {
    width: "100%"
  },
  media: {
    height: 400
  },
  paper: {
    backgroundColor: bgColorPaper,
    width: "100%",
    height: 450
  }
});

class Principal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <div className={classes.root}>
          <Paper elevation={6} className={classes.paper} />
        </div>
      </div>
    );
  }
}

Principal.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Principal);
