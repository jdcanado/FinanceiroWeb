//CommentBox.js
import React, { Component } from "react";
import axios from "axios";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";
import style from "./style";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Card, { CardActions, CardContent, CardMedia } from "material-ui/Card";

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
  }
});

class CommentBox extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
    this.loadCommentsFromServer = this.loadCommentsFromServer.bind(this);
    this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
    //this.handleCommentDelete = this.handleCommentDelete.bind(this);
    //this.handleCommentUpdate = this.handleCommentUpdate.bind(this);
  }

  loadCommentsFromServer() {
    const stitch = require("mongodb-stitch");
    const client = new stitch.StitchClient("react-xnrfa");
    const db = client.service("mongodb", "mongodb-atlas").db("jdctestereact");

    client
      .login()
      .then(() => db.collection("Comment").find())
      .then(res => {
        this.setState({ data: res });
      });
  }
  handleCommentSubmit(comment) {
    const stitch = require("mongodb-stitch");
    const client = new stitch.StitchClient("react-xnrfa");
    const db = client.service("mongodb", "mongodb-atlas").db("jdctestereact");

    let comments = this.state.data;
    console.log(comment);

    client.login().then(() =>
      db
        .collection("Comment")
        .insertOne({
          owner_id: client.authedId(),
          author: comment.author,
          text: comment.text
        })
        .then(result => console.log("success: ", result))
        .catch(e => console.log("error: ", e))
    );

    this.componentDidMount();
  }
  handleCommentDelete(id) {
    axios
      .delete(`${this.props.url}/${id}`)
      .then(res => {
        console.log("Comment deleted");
      })
      .catch(err => {
        console.error(err);
      });
  }
  handleCommentUpdate(id, comment) {
    //sends the comment id and new author/text to our api
    axios.put(`${this.props.url}/${id}`, comment).catch(err => {
      console.log(err);
    });
  }
  componentDidMount() {
    this.loadCommentsFromServer();
    //setInterval(this.loadCommentsFromServer, this.props.pollInterval);
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <div className={classes.root} />
        <div style={style.commentBox}>
          <h2 style={style.title}>Comments:</h2>
          <CommentList
            onCommentDelete={this.handleCommentDelete}
            onCommentUpdate={this.handleCommentUpdate}
            data={this.state.data}
          />
          <CommentForm onCommentSubmit={this.handleCommentSubmit} />
        </div>
      </div>
    );
  }
}

CommentBox.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CommentBox);
