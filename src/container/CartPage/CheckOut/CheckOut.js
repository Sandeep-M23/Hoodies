import React, { useState, useLayoutEffect, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import Stepper from "../../../components/UI/Stepper/Stepper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Input from "../../../components/UI/Input/Input";
import { Button } from "@material-ui/core";
import AuthContext from "../../../context/authContext";
import Spinner from "../../../components/UI/Spinner/Spinner";
import axiosInstance from "../../../axios-firebase";
import SimpleModal from "../../../components/UI/Modal/Modal";
import withErrorHandler from "../../../hoc/WithErrorHandler/WithErrorHandler";

const useStyles = makeStyles((theme) => ({
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 850,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItem: "center",
    boxShadow: "3px 3px 3px 7px #ccc",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(14),
      marginBottom: theme.spacing(8),
      padding: theme.spacing(6),
    },
  },
  title: {
    fontFamily: "inherit",
    fontWeight: "500",
    padding: "5px",
    position: "relative",
    display: "inline-block",
    margin: "20px auto 30px auto",
    [theme.breakpoints.down("xs")]: {
      fontSize: "40px",
    },
    "&::before": {
      position: "absolute",
      top: "35px",
      left: "-100px",
      width: "80px",
      height: "4px",
      content: '""',
      backgroundColor: "#000",
      [theme.breakpoints.down("xs")]: {
        top: "30px",
        width: "70px",
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
      [theme.breakpoints.down("xs")]: {
        top: "30px",
        width: "70px",
      },
    },
  },
  h5: {
    margin: "10px 0px",
    padding: "5px 0px",
  },
  grid: {
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "15px 0px",
  },
  button: {
    width: "70%",
    margin: "10px 30px",
    fontSize: "15px",
    padding: "10px",
    color: "#fff",
    backgroundColor: "#000",
    "&:hover": {
      backgroundColor: "#000000cf",
    },
    "&:disabled": {
      color: "#00000042",
      backgroundColor: "#eee",
    },
  },
  modalButton: {
    margin: "25px auto",
    fontSize: "15px",
    padding: "10px",
    color: "#fff",
    backgroundColor: "#000",
    "&:hover": {
      backgroundColor: "#000000cf",
    },
  },
}));

const CheckOut = (props) => {
  const Styles = useStyles();
  const [open, setOpen] = useState(true);
  const [activeStep] = useState(2);
  const [checkoutForm, setCheckoutForm] = useState({
    firstName: {
      type: "text",
      value: "",
      name: "firstName",
      label: "First Name",
      validation: {
        isRequired: true,
      },
      valid: "false",
      gridSpace: 6,
    },
    lastName: {
      type: "text",
      value: "",
      name: "lastName",
      label: "Last Name",
      validation: {
        isRequired: true,
      },
      valid: "false",
      gridSpace: 6,
    },
    email: {
      type: "email",
      value: "",
      name: "email",
      label: "Email",
      validation: {
        isRequired: true,
        isEmail: true,
      },
      valid: "false",
      gridSpace: 12,
      message: "Email Format - example@mail.com",
    },
    address: {
      type: "text",
      value: "",
      name: "address",
      label: "Address Line",
      validation: {
        isRequired: true,
      },
      valid: "false",
      gridSpace: 12,
    },
    city: {
      type: "text",
      value: "",
      name: "city",
      label: "City",
      validation: {
        isRequired: true,
      },
      valid: "false",
      gridSpace: 6,
    },
    state: {
      type: "text",
      value: "",
      name: "state",
      label: "State",
      validation: {
        isRequired: true,
      },
      valid: "false",
      gridSpace: 6,
    },
    zipCode: {
      type: "number",
      value: "",
      name: "zipCode",
      label: "Zip / Postal code",
      validation: {
        isRequired: true,
        minLength: 6,
        maxLength: 6,
        isNumeric: true,
      },
      valid: "false",
      message: "6 digit Number",
      gridSpace: 6,
    },
    country: {
      type: "text",
      value: "",
      name: "country",
      label: "Country",
      validation: {
        isRequired: true,
      },
      valid: "false",
      gridSpace: 6,
    },
    cardName: {
      type: "text",
      value: "",
      name: "cardName",
      label: "Name on Card",
      validation: {
        isRequired: true,
      },
      valid: "false",
      gridSpace: 6,
    },
    cardNumber: {
      type: "number",
      value: "",
      name: "cardName",
      label: "Card Number",
      validation: {
        isRequired: true,
        minLength: 16,
        maxLength: 16,
        isNumeric: true,
      },
      valid: "false",
      message: "16 digit Number on Card",
      gridSpace: 6,
    },
    expiryDate: {
      type: "text",
      value: "",
      name: "expiryDate",
      label: "Expiry Date",
      validation: {
        isRequired: true,
        isDate: true,
      },
      valid: "false",
      message: "Format MM/YYYY",
      gridSpace: 6,
    },
    cvv: {
      type: "password",
      value: "",
      name: "cvv",
      label: "CVV",
      validation: {
        isRequired: true,
        numberLength: true,
        isNumeric: true,
      },
      valid: "false",
      message: "Last three digits on signature strip",
      gridSpace: 6,
    },
  });
  const [validForm, setValidForm] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const [loading, setLoading] = useState(false);

  //OrderData and PriceData
  let orderData = props.location.state.order;
  let priceData = props.location.state.price;

  //Authentication Context
  const authCtx = useContext(AuthContext);
  const token = authCtx.token;
  const userId = authCtx.userId;

  //To open window at top of the page
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //To Check Validity of The Form Information
  const checkValidity = (value, rules) => {
    let isValid = true;

    if (!rules) {
      return true;
    }
    if (rules.isRequired) {
      isValid = value.trim() !== "" && isValid;
    }

    if (rules.numberLength) {
      isValid = value.length === 3 && isValid;
    }

    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }

    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid;
    }

    if (rules.isEmail) {
      const pattern =
        /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
      isValid = pattern.test(value) && isValid;
    }

    if (rules.isNumeric) {
      const pattern = /^\d+$/;
      isValid = pattern.test(value) && isValid;
    }

    if (rules.isDate) {
      var pattern = /^(0[1-9]|1[0-2])\/(19|20)\d{2}$/;
      isValid = pattern.test(value) && isValid;
    }

    return isValid;
  };

  //To Store Form Values and check validity
  const inputChangeHandler = (event, inputIdentifier) => {
    const updatedCheckoutForm = {
      ...checkoutForm,
    };
    const updatedFormElement = {
      ...updatedCheckoutForm[inputIdentifier],
    };
    updatedFormElement.value = event.target.value;
    updatedFormElement.valid = checkValidity(
      updatedFormElement.value,
      updatedFormElement.validation
    );
    updatedCheckoutForm[inputIdentifier] = updatedFormElement;

    let formIsValid = true;
    for (let inputIdentifier in updatedCheckoutForm) {
      formIsValid = updatedCheckoutForm[inputIdentifier].valid && formIsValid;
    }

    setCheckoutForm(updatedCheckoutForm);
    setValidForm(formIsValid);
  };

  //Clear products present in Cart once Form Is Submitted
  const clearCartHandler = () => {
    setLoading(true);
    orderData.map((order) =>
      axiosInstance.delete(`/Cart/${order.productId}.json?auth=` + token)
    );
    setLoading(false);
  };

  //To store the order Information in Firebase
  const orderContinuedHandler = (event) => {
    setLoading(true);
    event.preventDefault();
    const formData = {};
    for (let formElementIdentifier in checkoutForm) {
      formData[formElementIdentifier] =
        checkoutForm[formElementIdentifier].value;
    }
    const order = {
      FormData: formData,
      Orderdata: orderData,
      PriceData: priceData,
      userId: userId,
    };
    axiosInstance
      .post("Orders.json?auth=" + token, order)
      .then((response) => {});
    clearCartHandler();
    setDidSubmit(true);
    setLoading(false);
  };

  //To close the modal and redirect to HomePage
  const modalCloseHandler = () => {
    setOpen(false);
    props.history.push("/");
  };

  const formElementsArray = [];
  for (let key in checkoutForm) {
    formElementsArray.push({
      id: key,
      config: checkoutForm[key],
    });
  }

  let form = (
    <form onSubmit={orderContinuedHandler} className={Styles.form}>
      <Grid container spacing={3} className={Styles.grid}>
        {formElementsArray.map((formElement) => {
          return (
            <Grid
              item
              xs={12}
              sm={formElement.config.gridSpace}
              key={formElement.id}
            >
              <Input
                key={formElement.id}
                type={formElement.config.type}
                name={formElement.config.name}
                error={!formElement.config.valid}
                label={formElement.config.label}
                message={formElement.config.message}
                onChange={(event) => inputChangeHandler(event, formElement.id)}
              />
            </Grid>
          );
        })}
      </Grid>
      <Button type="submit" disabled={!validForm} className={Styles.button}>
        Submit
      </Button>
    </form>
  );

  //Checkout Form
  const checkOutContent = (
    <React.Fragment>
      <Stepper Step={activeStep} />
      <main className={Styles.layout}>
        <Paper className={Styles.paper}>
          <Typography variant="h3" className={Styles.title}>
            Checkout
          </Typography>
          <Typography variant="h5" className={Styles.h5}>
            Shipping address & Payment Method
          </Typography>
          {form}
        </Paper>
      </main>
    </React.Fragment>
  );

  //Modal Message after Form Submission
  const didSubmitModalContent = (
    <React.Fragment>
      <Typography style={{ margin: "10px" }}>THANK YOU!</Typography>
      <Typography style={{ margin: "10px" }}>
        YOUR ORDER HAS BEEN PLACED SUCCESSFULLY
      </Typography>
      <Button onClick={modalCloseHandler} className={Styles.modalButton}>
        LETS CONTINUE SHOPPING
      </Button>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      {loading ? <Spinner /> : checkOutContent}
      {didSubmit ? (
        <SimpleModal open={open}>{didSubmitModalContent}</SimpleModal>
      ) : null}
    </React.Fragment>
  );
};

export default withErrorHandler(withRouter(CheckOut), axiosInstance);
