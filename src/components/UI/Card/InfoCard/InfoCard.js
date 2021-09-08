import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { FavoriteButton, AddToCartButton } from "../../Button/Button";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  Image: {
    width: "45%",
    height: "90vh",
    float: "left",
    marginRight: "30px",
    borderTopLeftRadius: "15px",
    borderBottomLeftRadius: "15px",
    [theme.breakpoints.down("sm")]: {
      marginRight: "10px",
      width: "50%",
      height: "60vh",
    },
  },
  Button: {
    backgroundColor: "#A21CAF",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#71177a",
    },
    "&:focus": {
      backgroundColor: "black",
    },
  },
  Box1: {
    display: "flex",
    height: "90vh",
    maxWidth: "90%",
    paddingTop: "50px",
    paddingBottom: "50px",
    [theme.breakpoints.down("sm")]: {
      height:'70vh'
    },
  },
  Box2: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    margin: "0px 20px 20px 20px",
    [theme.breakpoints.down("sm")]: {
      margin: "0px 10px",
    },
  },
  h1: {
    display: "flex",
    fontSize: "3.5rem",
    fontWeight: "lighter",
    padding: "10px",
    margin: "0px 10px",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      fontSize: "3rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem",
    },
  },
  span1: {
    display: "block",
    fontSize: "2rem",
    padding: "10px",
    margin: "10px",
    marginTop: "0px",
    color: "#fe5252",
    [theme.breakpoints.down("md")]: {
      fontSize: "1.5rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
      margin: "5px",
      padding: "5px",
    },
  },
  p: {
    fontSize: "1.5rem",
    padding: "10px",
    margin: "10px",
    marginTop: "0px",
    lineHeight: "1.7",
    fontWeight: "300",
    [theme.breakpoints.down("md")]: {
      fontSize: "1.2rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
      margin: "5px",
      padding: "5px",
    },
  },
  span2: {
    fontSize: "1.8rem",
    padding: "10px",
    margin: "10px",
    marginTop: "0px",
    fontWeight: "300",
    [theme.breakpoints.down("md")]: {
      fontSize: "1.3rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
      margin: "5px",
      padding: "5px",
    },
  },
  span3: {
    fontSize: "1.5rem",
    padding: "10px",
    margin: "10px",
    marginTop: "0px",
    fontWeight: "300",
    [theme.breakpoints.down("md")]: {
      fontSize: "1.2rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
      margin: "5px",
      padding: "5px",
    },
  },
  Box3: {
    margin: "40px 20px",
    [theme.breakpoints.down("sm")]: {
      margin: "20px 0px",
    },
  },
}));

const InfoCard = (props) => {
  const Styles = useStyles();
  return (
    <Container maxWidth="lg">
      <Box component="div" className={Styles.Box1}>
        <img src={props.productImage} alt="" className={Styles.Image} />
        <Box component="div" className={Styles.Box2}>
          <Box
            component="div"
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
          >
            <Typography variant="h1" className={Styles.h1}>
              {props.productName}
              <FavoriteButton
                clicked={props.addToFavorites}
                style={{
                  position: "relative",
                  left: "20%",
                  alignItems: "center",
                }}
                disable={props.disableFavoriteButton}
              />
            </Typography>
            <span className={Styles.span1}>Rs.{props.price}</span>
            <p className={Styles.p}>{props.productDetails}</p>
            <span className={Styles.span2}>Fit - {props.fit}</span>
            <span className={Styles.span3}>Material - {props.material}</span>
          </Box>
          <Box component="div" className={Styles.Box3}>
            <AddToCartButton
              clicked={props.addToCart}
              style={{ width: "100%", padding: "10px", fontSize: "1.5rem" }}
            />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default InfoCard;
