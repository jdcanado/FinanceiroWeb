import React, { Component } from "react";
import CommentBox from "./CommentBox";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";
import IconButton from "material-ui/IconButton";
import MenuIcon from "material-ui-icons/Menu";
import AccountCircle from "material-ui-icons/AccountCircle";
import { withStyles } from "material-ui/styles";
import Principal from "./Principal";
import * as colors from "material-ui/colors";
import Paper from "material-ui/Paper";
import Button from "material-ui/Button";
import DirectionsRunIcon from "material-ui-icons/DirectionsRun";

const bgColor = colors["blueGrey"][900];
const bgColorPaper = colors["blueGrey"][900];
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
  barTop: {
    backgroundColor: bgColor,
    height: 70
  },
  button: {
    margin: theme.spacing.unit
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  }
});

class Home extends Component {
  // calls the login method in authentication service
  login = () => {
    this.props.auth.login();
  };
  // calls the logout method in authentication service
  logout = () => {
    this.props.auth.logout();
  };
  render() {
    // calls the isAuthenticated method in authentication service
    const { isAuthenticated } = this.props.auth;
    const { classes } = this.props;
    return (
      <div>
        {isAuthenticated() && (
          <div>
            <AppBar color="primary" className={classes.barTop}>
              <Toolbar>
                <IconButton
                  className={classes.menuButton}
                  color="primary"
                  aria-label="Menu"
                >
                  <MenuIcon />
                </IconButton>
                <Typography
                  type="title"
                  color="inherit"
                  className={classes.flex}
                >
                  Financeiro Web
                </Typography>
                <IconButton color="primary" onClick={this.logout}>
                  <AccountCircle />
                </IconButton>
              </Toolbar>
            </AppBar>
            <CommentBox />
          </div>
        )}
        {!isAuthenticated() && (
          <div>
            <AppBar color="primary" className={classes.barTop}>
              <Toolbar>
                <IconButton
                  className={classes.menuButton}
                  color="primary"
                  aria-label="Menu"
                >
                  <MenuIcon />
                </IconButton>
                <Typography
                  type="title"
                  color="inherit"
                  className={classes.flex}
                >
                  Financeiro Web
                </Typography>
                <Button
                  onClick={this.login}
                  className={classes.button}
                  raised
                  color="primary"
                >
                  Log in
                  <DirectionsRunIcon className={classes.rightIcon} />
                </Button>
              </Toolbar>
            </AppBar>
            <Principal />
          </div>
        )}
      </div>
    );
  }
}

export default withStyles(styles)(Home);
