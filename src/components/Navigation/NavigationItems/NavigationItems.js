import React, { useState } from "react";
import NavigationItem from "./NavigationItem/NavigationItem";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Drawer from "@material-ui/core/Drawer";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles((theme) => ({
  NavigationItems: {
    padding: 0,
    margin: "8px",
    display: "flex",
  },
  fullList: {
    width: 300,
    margin: "5px",
    display: "flex",
    flexDirection: "column",
    padding: "15px",
    [theme.breakpoints.down("xs")]: {
      width: 225,
    },
  },
  drawerPaper: {
    backgroundColor: "black",
  },
  menuButton: {
    padding: "5px",
    margin: "10px",
  },
}));

const NavigationItems = (props) => {
  const Styles = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [openDrawer, setOpenDrawer] = useState(false);

  //Open Drawer
  const openDrawerHandler = (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpenDrawer(true);
  };

  //Close Drawer
  const closeDrawerHandler = () => {
    setOpenDrawer(false);
  };

  const mobileView = (
    <React.Fragment>
      <IconButton
        edge="start"
        className={Styles.menuButton}
        color="inherit"
        aria-label="open drawer"
        onClick={openDrawerHandler}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        open={openDrawer}
        onClose={closeDrawerHandler}
        classes={{
          paper: Styles.drawerPaper,
        }}
      >
        <div
          className={Styles.fullList}
          role="presentation"
          onClick={closeDrawerHandler}
          onKeyDown={closeDrawerHandler}
        >
          <List className={Styles.MobileStyles}>
            <NavigationItem Icon={<MenuBookIcon />} Link="/Collections">
              Collections
            </NavigationItem>
            {props.isAuthenticated ? (
              <NavigationItem Icon={<FavoriteIcon />} Link="/Favorites">
                Favorites
              </NavigationItem>
            ) : null}
            {props.isAuthenticated ? (
              <NavigationItem Icon={<ShoppingCartIcon />} Link="/Cart">
                Cart
              </NavigationItem>
            ) : null}
            {!props.isAuthenticated ? (
              <NavigationItem Icon={<AccountCircleIcon />} Link="/Login">
                Login
              </NavigationItem>
            ) : (
              <NavigationItem Icon={<ExitToAppIcon />} Link="/Logout">
                Logout
              </NavigationItem>
            )}
          </List>
        </div>
      </Drawer>
    </React.Fragment>
  );

  const desktopView = (
    <List className={Styles.NavigationItems}>
      <NavigationItem Icon={<MenuBookIcon />} Link="/Collections">
        Collections
      </NavigationItem>
      {props.isAuthenticated ? (
        <NavigationItem Icon={<FavoriteIcon />} Link="/Favorites">
          Favorites
        </NavigationItem>
      ) : null}
      {props.isAuthenticated ? (
        <NavigationItem Icon={<ShoppingCartIcon />} Link="/Cart">
          Cart
        </NavigationItem>
      ) : null}
      {!props.isAuthenticated ? (
        <NavigationItem Icon={<AccountCircleIcon />} Link="/Login">
          Login
        </NavigationItem>
      ) : (
        <NavigationItem Icon={<ExitToAppIcon />} Link="/Logout">
          Logout
        </NavigationItem>
      )}
    </List>
  );

  return <React.Fragment>{isMobile ? mobileView : desktopView}</React.Fragment>;
};

export default NavigationItems;
