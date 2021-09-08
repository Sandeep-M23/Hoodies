import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  Image: {
    width: "20%",
    height: "40vh",
    float: "left",
    marginRight: "20px",
    borderRadius: "15px",
    [theme.breakpoints.down("sm")]: {
      width: "25%",
      height: "35vh",
    },
  },
  title: {
    fontFamily: "inherit",
    fontWeight: "lighter",
    padding: "5px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "35px",
    },
  },
  h5: {
    fontWeight: "lighter",
    fontFamily: "inherit",
    padding: "5px",
    margin: "3px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "20px",
      padding: 0,
    },
  },
  Box1: {
    display: "flex",
    padding: "30px 0px",
  },
  Box2: {
    display: "flex",
    width: "100%",
    margin: "10px 20px",
    alignItems: "flex-start",
    flexDirection: "column",
  },
  span: {
    fontSize: "2.3rem",
    fontWeight: "500",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.9rem",
    },
  },
}));

const Summary = (props) => {
  const Styles = useStyles();
  
  return (
    <React.Fragment>
      <Box className={Styles.Box1}>
        <img src={props.Image} alt="" className={Styles.Image} />
        <Box className={Styles.Box2}>
          <Typography variant="h3" gutterBottom className={Styles.title}>
            {props.Title}
          </Typography>
          <Typography variant="h5" className={Styles.h5}>
            Fit - {props.Fit}
          </Typography>
          <Typography variant="h5" className={Styles.h5}>
            Size - {props.Size}
          </Typography>
          <Typography variant="h5" className={Styles.h5}>
            Quantity - {props.Quantity}
          </Typography>
          <Typography variant="h5" className={Styles.h5}>
            Material - {props.Material}
          </Typography>
        </Box>
        <span className={Styles.span}>Rs.{props.Price * props.Quantity}</span>
      </Box>
    </React.Fragment>
  );
};

export default Summary;
