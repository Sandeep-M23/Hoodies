import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
    justifyContent: "center",
    padding: "10px",
  },
}));

const Spinner = () => {
  const Styles = useStyles();

  return (
    <div className={Styles.root}>
      <CircularProgress size={80} style={{ color: "#A21CAF" }} />
    </div>
  );
};

export default Spinner;
