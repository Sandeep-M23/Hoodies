import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Divider, Typography } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: 350,
  },
  drawerPaper: {
    width: 350,
    position: "absolute",
    borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
    [theme.breakpoints.down("md")]: {
      width: 250,
    },
  },
  drawerContainer: {
    marginTop: "120px",
    display: "flex",
    flexDirection: "column",
    overflow: "auto",
  },
  boxContent: {
    display: "flex",
    justifyContent: "flex-start",
  },
  formControl: {
    margin: theme.spacing(3),
  },
  checkBox: {
    color: "#A21CAF !important",
    "&$checked": {
      color: "#A21CAF !important",
    },
    "&:hover": {
      backgroundColor: "#a21caf14",
    },
  },
  checked: {},
  h3: {
    fontSize: "2.5rem",
    fontWeight: "lighter",
  },
  FormGroup: {
    display: "flex",
    flexDirection: "row",
  },
  AccordionDetails: {
    flexDirection: "column",
  },
}));

const SideBar = (props) => {
  const Styles = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const mobileView = (
    <React.Fragment>
      <Accordion square={true}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h3" className={Styles.h3}>
            FILTERS
          </Typography>
        </AccordionSummary>
        <Divider
          variant="middle"
          style={{ height: "1px", backgroundColor: "#000" }}
        />
        <AccordionDetails className={Styles.AccordionDetails}>
          <div className={Styles.boxContent}>
            <FormControl component="fieldset" className={Styles.formControl}>
              <FormLabel
                style={{ color: "#000000", fontSize: "1.3rem", padding: "5px" }}
              >
                Price
              </FormLabel>
              <FormGroup className={Styles.FormGroup}>
                {props.priceBox.map((item) => {
                  return (
                    <FormControlLabel
                      key={item.id}
                      control={
                        <Checkbox
                          className={Styles.checkBox}
                          onChange={(event) => props.onPriceChange(event, item)}
                          checked={item.checked}
                        />
                      }
                      label={item.label}
                      value={item.value}
                    />
                  );
                })}
              </FormGroup>
            </FormControl>
          </div>
          <Divider variant="middle" />
          <div className={Styles.boxContent}>
            <FormControl component="fieldset" className={Styles.formControl}>
              <FormLabel
                style={{ color: "#000000", fontSize: "1.3rem", padding: "5px" }}
              >
                Fit Type
              </FormLabel>
              <FormGroup className={Styles.FormGroup}>
                {props.fitBox.map((item) => {
                  return (
                    <FormControlLabel
                      key={item.id}
                      control={
                        <Checkbox
                          className={Styles.checkBox}
                          onChange={(event) => props.onFitChange(event, item)}
                          checked={item.checked}
                        />
                      }
                      label={item.label}
                    />
                  );
                })}
              </FormGroup>
            </FormControl>
          </div>
        </AccordionDetails>
      </Accordion>
    </React.Fragment>
  );

  const desktopView = (
    <Drawer
      className={Styles.drawer}
      variant="permanent"
      classes={{ paper: Styles.drawerPaper }}
    >
      <div className={Styles.drawerContainer}>
        <Typography
          variant="h6"
          style={{ marginLeft: "20px", marginBottom: "10px" }}
        >
          FILTERS
        </Typography>
        <Divider />
        <div className={Styles.boxContent}>
          <FormControl component="fieldset" className={Styles.formControl}>
            <FormLabel style={{ color: "#000000" }}>Price</FormLabel>
            <FormGroup>
              {props.priceBox.map((item) => {
                return (
                  <FormControlLabel
                    key={item.id}
                    control={
                      <Checkbox
                        className={Styles.checkBox}
                        onChange={(event) => props.onPriceChange(event, item)}
                        checked={item.checked}
                      />
                    }
                    label={item.label}
                    value={item.value}
                  />
                );
              })}
            </FormGroup>
          </FormControl>
        </div>
        <Divider />
        <div className={Styles.boxContent}>
          <FormControl component="fieldset" className={Styles.formControl}>
            <FormLabel style={{ color: "#000000" }}>Fit Type</FormLabel>
            <FormGroup>
              {props.fitBox.map((item) => {
                return (
                  <FormControlLabel
                    key={item.id}
                    control={
                      <Checkbox
                        className={Styles.checkBox}
                        onChange={(event) => props.onFitChange(event, item)}
                        checked={item.checked}
                      />
                    }
                    label={item.label}
                  />
                );
              })}
            </FormGroup>
          </FormControl>
        </div>
      </div>
    </Drawer>
  );

  return <React.Fragment>{isMobile ? mobileView : desktopView}</React.Fragment>;
};

export default SideBar;
