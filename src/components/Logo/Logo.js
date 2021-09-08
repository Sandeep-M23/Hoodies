import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import logo from "../../assest/logo.png";

const useStyles = makeStyles((theme) => ({
  ImageContainer: {
    boxSizing: "border-box",
    backgroundColor: "white",
    padding: "8px",
    borderRadius: "5px",
    "&:hover": {
      backgroundColor: "#A21CAF",
    },
  },
  Image: {
    height: "auto",
    maxWidth: "50px",
  },
}));

const Logo = () => {
  const Styles = useStyles();
  return (
    <div className={Styles.ImageContainer}>
      <Link to="/">
        <img src={logo} alt="Logo" className={Styles.Image} />
      </Link>
    </div>
  );
};

export default Logo;
