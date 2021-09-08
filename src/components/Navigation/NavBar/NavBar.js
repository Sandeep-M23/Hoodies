import React from "react";
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import { makeStyles } from "@material-ui/core/styles";
import { AppBar } from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#000000",
    zIndex: theme.zIndex.drawer + 1,
    padding: "3px",
  },
  items: {
    justifyContent: "space-between",
  },
}));

const NavBar = (props) => {
  const Styles = useStyles();
  return (
    <div>
      <AppBar position="fixed" className={Styles.root}>
        <Toolbar className={Styles.items}>
          <Logo className={Styles.Logo} />
          <NavigationItems isAuthenticated={props.isAuth} />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;