import React, { useContext } from "react";
import Styles from "./Layout.module.css";
import { SnackbarProvider } from "notistack";
import Slide from "@material-ui/core/Slide";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import NavBar from "../../components/Navigation/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import AuthContext from "../../context/authContext";

const Layout = (props) => {
  //Authentication Context
  const authCtx = useContext(AuthContext);
  const loggedIn = authCtx.isLoggedIn;

  //To close SnackBar Using useRef
  const snackBarRef = React.createRef();
  const handleClose = (key) => () => {
    snackBarRef.current.closeSnackbar(key);
  };

  return (
    <React.Fragment>
      <SnackbarProvider
        ref={snackBarRef}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        TransitionComponent={Slide}
        autoHideDuration={2000}
        transitionDuration={{ enter: 225, exit: 200 }}
        action={(key) => (
          <IconButton key="close" color="inherit" onClick={handleClose(key)}>
            <CloseIcon />
          </IconButton>
        )}
      >
        <NavBar isAuth={loggedIn} />
        <main className={Styles.Layout}>{props.children}</main>
        <Footer />
      </SnackbarProvider>
    </React.Fragment>
  );
};

export default Layout;
