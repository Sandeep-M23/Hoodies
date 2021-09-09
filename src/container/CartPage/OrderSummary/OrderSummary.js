import React, { useState, useEffect, useLayoutEffect} from "react";
import {withRouter} from 'react-router-dom';
import { makeStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Summary from "../../../components/Summary/Summary";
import { Typography,Divider} from "@material-ui/core";
import Stepper from '../../../components/UI/Stepper/Stepper';
import { ButtonGroup } from "../../../components/UI/Button/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    width:"100%",
    border: "2px solid black",
    borderRadius: "15px",
    margin:"10px auto",
    padding: "30px auto",
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down('sm')]: {
      padding:"15px",
      margin:"0px auto"
    }
  },
  title: {
    fontFamily: "inherit",
    fontWeight: "500",
    padding: "5px",
    position: "relative",
    display: "inline-block",
    margin: "20px auto 30px auto",
    [theme.breakpoints.down("sm")]:{
      fontSize: "30px",
    },
    "&::before": {
      position: "absolute",
      top: "35px",
      left: "-100px",
      width: "80px",
      height: "4px",
      content: '""',
      backgroundColor: "#000",
      [theme.breakpoints.down("sm")]:{
        top: "30px",
        width: "40px",
        left:'-65px'
      },
    },
    "&::after": {
      position: "absolute",
      top: "35px",
      right: "-100px",
      width: "80px",
      height: "4px",
      content: '""',
      backgroundColor: "#000",
      [theme.breakpoints.down("sm")]:{
        top: "30px",
        width: "40px",
        right:'-65px'
      },
    },
  },
  divider:{
    backgroundColor:'#000'
  },
  h4:{
    fontFamily: "inherit",
    fontWeight: "500",
    padding: "5px",
    position: "relative",
    display: "inline-block",
    margin: "20px auto 30px auto",
    [theme.breakpoints.down('sm')]: {
      fontSize:'20px'
    }
  },
}));

const OrderSummary = (props) => {
  const Styles = useStyles();

  const [order, setOrder] = useState([]);
  const [activeStep, setActiveStep] = useState(1);

  //OrderData and PriceData
  let orderData = props.location.state.order;
  let priceData = props.location.state.price;

  //To open window at top of the page
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const OrderDetails = orderData.map((product) => {
      return (
        <Summary
          key={product.id}
          Title={product.productName}
          Image={product.productImage}
          Price={product.price}
          Quantity={product.quantity}
          Size={product.size}
          Material={product.material}
          Fit={product.Fit}
        />
      );
    });
    setOrder(OrderDetails);
  }, [orderData]);

  //Continue to CheckOutPage
  const orderContinuedHandler = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    props.history.push({
      pathname: "/Cart/OrderSummary/CheckOut",
      state: {
        order:orderData,
        price: priceData,
      },
    });
  };

  //Exit/Go back to cartPage
  const orderCancelledHandler = () => {
    props.history.goBack();
  };

  return (
    <div className={Styles.div}>
      <Stepper Step={activeStep} />
      <Container maxWidth="lg" className={Styles.root}>
        <Typography variant="h3" className={Styles.title}>
          Order Summary
        </Typography>
        {order}
        <Divider className={Styles.divider} />
        <Typography variant="h4" className={Styles.h4}>
          Total Price - Rs.{priceData}
        </Typography>
      </Container>
      <ButtonGroup cancelled={()=>orderCancelledHandler()} continued={()=>orderContinuedHandler()}/>
    </div>
  );
};

export default withRouter(OrderSummary);
