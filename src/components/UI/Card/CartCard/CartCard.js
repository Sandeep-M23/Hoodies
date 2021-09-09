import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import { RemoveButton } from "../../Button/Button";
import { Button, Divider, Typography } from "@material-ui/core";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles((theme) => ({
  Image: {
    width: "20%",
    height: "40vh",
    float: "left",
    marginRight: "30px",
    borderTopLeftRadius: "15px",
    borderBottomLeftRadius: "15px",
    [theme.breakpoints.down("sm")]: {
      width: "20%",
      height:'20vh'
    },
  },
  Box1: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: "0px",
    alignItems: "center",
  },
  h1: {
    display: "flex",
    fontSize: "2.2rem",
    fontWeight: "lighter",
    padding: "5px",
    margin: "0px 10px",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.4rem",
    },
  },
  span1: {
    fontSize: "1.7rem",
    fontWeight: "500",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.2rem",
    },
  },
  Box2: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    margin: "0px 20px ",
    alignItems: "flex-start",
  },
  p: {
    fontSize: "1.3rem",
    padding: "3px",
    margin: "0px 10px",
    lineHeight: "1.7",
    fontWeight: "300",
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    lineClamp: "1",
    boxOrient: "vertical",
  },
  span2: {
    fontSize: "1rem",
    padding: "7px",
    margin: " 5px 10px",
    marginTop: "0px",
    color: "green",
  },
  Box3: {
    display: "grid",
    gridTemplateColumns: "auto auto auto auto",
    justifyContent: "space-evenly",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      margin: "10px",
    },
  },
  formControl: {
    width: "10vw",
  },
  Select: {
    "&:before": {
      borderColor: "#A21CAF",
    },
    "&:after": {
      borderColor: "#A21CAF",
    },
  },
  selectEmpty: {
    marginTop: theme.spacing(1),
  },
  menuItem: {
    "&:hover": {
      backgroundColor: "#A21CAF",
      color: "white",
    },
    "&.Mui-selected": {
      color: "white",
      backgroundColor: "black",
    },
    "&.Mui-selected:hover": {
      color: "white",
      backgroundColor: "#A21CAF",
    },
  },
  InputLabel: {
    "&.Mui-focused": {
      color: "#A21CAF",
    },
  },
  divGrp: {
    margin: "15px",
    padding: "5px",
    [theme.breakpoints.down("sm")]: {
      margin: "3px",
      padding: "2px",
    },
  },
  Button: {
    fontSize: "15px",
    padding: "10px",
    backgroundColor: "#A21CAF",
    color: "whitesmoke",
    "&:hover": {
      backgroundColor: "#9615a2",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "7px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "5px",
    },
  },
}));

const CartCard = React.forwardRef((props, ref) => {
  const Styles = useStyles();

  const [size, setSize] = useState("");

  //To Select Size
  const selectChangeHandler = (event) => {
    setSize(event.target.value);
    props.onHandleCallBack(event.target.value);
  };

  return (
    <React.Fragment>
      <Box padding="35px 0px">
        <img src={props.Image} alt="" className={Styles.Image} />
        <Box className={Styles.Box1}>
          <Typography component="h1" className={Styles.h1}>
            {props.Title}
          </Typography>
          <span className={Styles.span1}>
            Rs.{props.Price * props.Quantity}
          </span>
        </Box>
        <Box component="div" className={Styles.Box2}>
          <p className={Styles.p}>{props.Details}</p>
          <span className={Styles.span2}>In Stock</span>
        </Box>
        <Box component="div" className={Styles.Box3}>
          <div className={Styles.divGrp}>
            <FormControl
              variant="filled"
              size="small"
              className={Styles.formControl}
            >
              <InputLabel className={Styles.InputLabel}>Size</InputLabel>
              <Select
                className={Styles.Select}
                value={size}
                onChange={selectChangeHandler}
              >
                <MenuItem className={Styles.menuItem} value="XS">
                  XS
                </MenuItem>
                <MenuItem className={Styles.menuItem} value="S">
                  S
                </MenuItem>
                <MenuItem className={Styles.menuItem} value="M">
                  M
                </MenuItem>
                <MenuItem className={Styles.menuItem} value="L">
                  L
                </MenuItem>
                <MenuItem className={Styles.menuItem} value="XL">
                  XL
                </MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className={Styles.divGrp}>
            <ButtonGroup
              className={Styles.ButtonGroup}
              size="large"
              aria-label="small outlined button group"
              variant="contained"
            >
              <Button
                style={{ backgroundColor: "#A21CAF", color: "whitesmoke" }}
                disabled={props.Quantity >= 10}
                onClick={props.incrementCounter}
              >
                +
              </Button>
              <Button disableElevation style={{ backgroundColor: "white" }}>
                {props.Quantity}
              </Button>
              <Button
                style={{ backgroundColor: "#A21CAF", color: "whitesmoke" }}
                disabled={props.Quantity <= 1}
                onClick={props.decrementCounter}
              >
                -
              </Button>
            </ButtonGroup>
          </div>
          <div className={Styles.divGrp}>
            <Button
              variant="contained"
              className={Styles.Button}
              size="large"
              onClick={props.moveToFavorites}
              value="MOVETOFAVORITES"
            >
              Move To Favorites
            </Button>
          </div>
          <div className={Styles.divGrp}>
            <RemoveButton clicked={props.removeFromCart} />
          </div>
        </Box>
      </Box>
      <Divider />
    </React.Fragment>
  );
});

export default CartCard;
