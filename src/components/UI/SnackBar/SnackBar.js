import React from "react";
import { Snackbar } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import Slide from "@material-ui/core/Slide";

const SnackBar = (props) => {
  const { snackbar, setSnackbar } = useContext(SnackbarContext);
  console.log("snackbar value", snackbar);

  //Close Snackbar 
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbar("");
  };

  const { message } = snackbar;

  return (
    <Snackbar
      open={!!message}
      autoHideDuration={2000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      TransitionComponent={Slide}
    >
      <Alert variant="filled" severity={props.type} onClose={handleClose}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default SnackBar;
