import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import DeleteIcon from "@material-ui/icons/Delete";
import { Button } from "@material-ui/core";
import AuthContext from "../../../context/authContext";
import { Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  IconColorFavoriteDisabled: {
    "&:disabled": {
      color: "#0000001f",
    },
  },
  IconColorFavorite: {
    "&:hover": {
      color: "#E11D48",
      backgroundColor: "#FFF1F2",
    },
    "&:disabled": {
      color: "red",
    },
  },
  IconColorDelete: {
    color: "#000",
    border: "1px solid black",
    borderRadius: "5px",
    "&:hover": {
      color: "#fff",
      backgroundColor: "#000",
    },
  },
  AddToCartButton: {
    fontSize: "15px",
    padding: "10px",
    backgroundColor: "#A21CAF",
    color: "whitesmoke",
    "&:hover": {
      backgroundColor: "#8f1a9b",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem !important",
    },
  },
  ProceedButton: {
    width: "40%",
    margin: "10px 30px",
    fontSize: "15px",
    padding: "10px",
    color: "#fff",
    backgroundColor: "#000",
    "&:hover": {
      backgroundColor: "#000000cf",
    },
  },
  BackButton: {
    width: "40%",
    margin: "10px 30px",
    fontSize: "15px",
    padding: "10px",
    border: "3px solid black",
    "&:hover": {
      backgroundColor: "#000000f",
    },
  },
}));

const AddToCartButton = (props) => {
  const Styles = useStyles();

  //Authentication Context
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;

  return (
    <Button
      variant="contained"
      size="large"
      className={Styles.AddToCartButton}
      disabled={isLoggedIn ? false : true}
      onClick={props.clicked}
      style={props.style}
      value="ADDTOCART"
    >
      ADD TO CART
    </Button>
  );
};

const FavoriteButton = (props) => {
  const styles = useStyles();

  //Authentication Context
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  return (
    <IconButton
      aria-label="add to favorites"
      className={
        isLoggedIn ? styles.IconColorFavorite : styles.IconColorFavoriteDisabled
      }
      style={props.style}
      disabled={isLoggedIn ? props.disable : true}
      onClick={props.clicked}
    >
      <FavoriteIcon />
    </IconButton>
  );
};

const RemoveButton = (props) => {
  const styles = useStyles();
  return (
    <IconButton
      aria-label="Remove from favorites"
      className={styles.IconColorDelete}
      style={props.style}
      onClick={props.clicked}
    >
      <DeleteIcon />
    </IconButton>
  );
};

const ButtonGroup = (props) => {
  const styles = useStyles();
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      margin="50px auto"
      width="100%"
    >
      <Button
        variant="outlined"
        className={styles.BackButton}
        onClick={props.cancelled}
      >
        BACK
      </Button>
      <Button
        variant="contained"
        className={styles.ProceedButton}
        onClick={props.continued}
      >
        PROCEED
      </Button>
    </Box>
  );
};

export { FavoriteButton, RemoveButton, AddToCartButton, ButtonGroup };
