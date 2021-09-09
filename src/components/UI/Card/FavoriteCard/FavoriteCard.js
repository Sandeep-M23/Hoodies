import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { RemoveButton, AddToCartButton } from "../../Button/Button";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "45vh",
    height: "85vh",
    borderRadius: "10px",
    margin: "15px",
    [theme.breakpoints.down("md")]: {
      width: "34vh",
      height: "60vh",
    }
  },
  media: {
    height: "70%",
    [theme.breakpoints.down("md")]: {
      height: "65%",
    },
    [theme.breakpoints.down("sm")]: {
      height: "65%",
    },
  },
  Info: {
    margin: "10px 10px 5px 10px",
    padding: "10px",
    [theme.breakpoints.down("md")]: {
      margin: "3px",
    },
  },
  h4: {
    marginTop: "10px",
    color: "#fe5252",
    fontSize: "25px",
    [theme.breakpoints.down("md")]: {
      fontSize: "20px",
    },
  },
  box: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    margin: "10px 0px",
    [theme.breakpoints.down("md")]: {
      margin: "15px 0px",
    },
  },
  h5: {
    fontSize: "1.6rem",
    [theme.breakpoints.down("md")]: {
      fontSize: "1.3rem",
    },
  },
}));

const FavoriteProductCard = (props) => {
  const Styles = useStyles();

  return (
    <Card className={Styles.root}>
      <Link to={props.Link} style={{ textDecoration: "none" }}>
        <CardMedia className={Styles.media} image={props.Image} />
      </Link>
      <CardContent className={Styles.Info}>
        <Typography component="h5" className={Styles.h5}>
          {props.Title}
        </Typography>
        <Typography component="h4" className={Styles.h4}>
          Rs.{props.Value}
        </Typography>
        <Box component="div" className={Styles.box}>
          <AddToCartButton clicked={props.addToCart} />
          <RemoveButton clicked={props.removeFromFavorites} />
        </Box>
      </CardContent>
    </Card>
  );
};

export default FavoriteProductCard;
