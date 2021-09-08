import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ReceiptIcon from "@material-ui/icons/Receipt";
import StepConnector from "@material-ui/core/StepConnector";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    margin: "100px 0px",
  },
  Stepper: {
    backgroundColor: "#000",
    margin: "70px 0px",
  },
  buttonGroup: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    margin: "40px 0px",
    padding: "10px 0px",
  },
  nextButton: {
    width: "30%",
    margin: "10px 30px",
    fontSize: "15px",
    padding: "10px",
    backgroundColor: "#A21CAF",
    color: "whitesmoke",
    "&:hover": {
      backgroundColor: "#8f1a9b",
    },
  },
  backButton: {
    width: "50%",
    margin: "10px 30px",
    fontSize: "15px",
    padding: "10px",
    color: "#fff",
    backgroundColor: "#000",
    "&:hover": {
      backgroundColor: "#000000cf",
    },
  },
}));

const ConnectorColor = withStyles({
  active: {
    "& $line": {
      backgroundColor: "#A21CAF",
    },
  },
  completed: {
    "& $line": {
      backgroundColor: "#A21CAF",
    },
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: "#fff",
    borderRadius: 1,
  },
})(StepConnector);

const IconStyles = makeStyles({
  root: {
    backgroundColor: "#fff",
    zIndex: 1,
    color: "#000",
    width: 50,
    height: 50,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  active: {
    backgroundColor: "#A21CAF",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
  },
  completed: {
    backgroundColor: "#A21CAF",
  },
});

const Icons = (props) => {
  const classes = IconStyles();
  const { active, completed } = props;

  const icons = {
    1: <ShoppingCartIcon />,
    2: <ReceiptIcon />,
    3: <CreditCardIcon />,
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
};

const getSteps = () => {
  return ["CART", "ORDER SUMMARY", "CHECKOUT"];
};

const StepperBar = (props) => {
  const classes = useStyles();
  const steps = getSteps();

  return (
    <div className={classes.root}>
      <Stepper
        alternativeLabel
        className={classes.Stepper}
        activeStep={props.Step}
        connector={<ConnectorColor />}
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={Icons}>
              <Typography style={{ color: "white" }}>{label}</Typography>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
};

export default StepperBar;
