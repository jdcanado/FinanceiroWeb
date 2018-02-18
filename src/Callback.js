import React from "react";
import { CircularProgress } from "material-ui/Progress";
import purple from "material-ui/colors/purple";

const styles = theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  progress: {
    margin: `0 ${theme.spacing.unit * 2}px`
  }
});

const Callback = () => (
  <div className={styles.root}>
    <CircularProgress
      className={styles.root}
      style={{ color: purple[500] }}
      thickness={7}
      size={150}
    />
  </div>
);

export default Callback;
