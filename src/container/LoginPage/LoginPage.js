import React, { useState, useRef, useContext, useLayoutEffect } from "react";
import { useHistory } from "react-router";
import LoginCard from "../../components/UI/Card/LoginCard/LoginCard";
import axios from "axios";
import AuthContext from "../../context/authContext";
import { useSnackbar } from "notistack";
import withErrorHandler from "../../hoc/WithErrorHandler/WithErrorHandler";

const LoginPage = () => {
  const [login, setLogin] = useState(true);

  //Authentication Context
  const authCtx = useContext(AuthContext);

  //To display Messages using Snackbar
  const { enqueueSnackbar } = useSnackbar();

  const history = useHistory();

  //To open window at top of the page
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //Input refs
  const inputRefs = {
    emailInputRef: useRef(),
    passwordInputRef: useRef(),
  };

  //Change Card From Login To SignUp
  const switchCardHandler = () => {
    setLogin((prevState) => !prevState);
  };

  //Form submission Handler
  const submitHandler = (event) => {
    event.preventDefault();

    const enteredData = {
      email: inputRefs.emailInputRef.current.value,
      password: inputRefs.passwordInputRef.current.value,
      returnSecureToken: true,
    };

    let url;
    if (login) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBGAiuyU64c9b8hvLkTbedy8gE52CYxTms";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBGAiuyU64c9b8hvLkTbedy8gE52CYxTms";
    }
    axios
      .post(url, enteredData)
      .then((response) => {
        const expirationTime = new Date(
          new Date().getTime() + +response.data.expiresIn * 1000
        );
        authCtx.login(
          response.data.idToken,
          response.data.localId,
          expirationTime.toISOString()
        );
        history.replace("/");
        enqueueSnackbar(`SUCCESSFULLY LOGGED IN`, { variant: "success" });
      })
      .catch((error) => {
        let errorMessage = error.response.data.error.message
          .split("_")
          .join(" ");
        enqueueSnackbar(`${errorMessage}`, { variant: "warning" });
      });
  };

  return (
    <React.Fragment>
      <LoginCard
        login={login}
        ref={inputRefs}
        onSwitchCard={switchCardHandler}
        onSubmit={submitHandler}
      />
    </React.Fragment>
  );
};

export default withErrorHandler(LoginPage, axios, false);
