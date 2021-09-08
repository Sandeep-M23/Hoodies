import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import SimpleModal from "../../components/UI/Modal/Modal";

const useStyles = makeStyles((theme) => ({
  div: {
    display: "flex",
    flexDirection: "column",
    fontSize: "2rem",
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

const withErrorHandler = (WrappedComponent, axios, requiredRedirect = true) => {
  const WithErrorHandler = (props) => {
    const Styles = useStyles();

    const [error, setError] = useState(false);

    //To send a Request Interceptor
    const requestInterceptor = axios.interceptors.request.use((req) => {
      setError(false);
      return req;
    });
    //To receive a Response Interceptor
    const responseInterceptor = axios.interceptors.response.use(
      (res) => res,
      (error) => {
        setError(error);
        console.log("WithErrorHandler: ", error);
        return Promise.reject(error);
      }
    );

    useEffect(() => {
      return () => {
        axios.interceptors.request.eject(requestInterceptor);
        axios.interceptors.response.eject(responseInterceptor);
      };
    }, [requestInterceptor, responseInterceptor]);

    //To close Modal
    const closeHandler = () => {
      setError(false);
      return requiredRedirect ? props.history.goBack() : null;
    };

    //Display Message
    let message = (
      <div className={Styles.div}>
        {error ? error.message : null}
        <Button onClick={closeHandler} className={Styles.modalButton}>
          CLOSE
        </Button>
      </div>
    );

    return (
      <React.Fragment>
        <SimpleModal open={error} close={closeHandler}>
          {message}
        </SimpleModal>
        <WrappedComponent {...props} />
      </React.Fragment>
    );
  };
  return WithErrorHandler;
};
export default withErrorHandler;
