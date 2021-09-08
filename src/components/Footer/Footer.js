import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Logo from "../Logo/Logo";
import IconButton from "@material-ui/core/IconButton";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import YouTubeIcon from "@material-ui/icons/YouTube";
import PinterestIcon from "@material-ui/icons/Pinterest";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Divider from "@material-ui/core/Divider";
import ToolTip from "@material-ui/core/Tooltip";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: "#000",
    maxHeight: "70%",
    maxWidth: "97%",
    color: "#fff",
    padding: "10px",
    borderRadius: "5px",
    display: "flex",
    margin: "0px auto",
    flexDirection: "column",
    alignItems: "center",
  },
  h3: {
    fontSize: "3rem",
    margin: "20px auto",
    [theme.breakpoints.down("md")]: {
      fontSize: "2rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.5rem",
    },
  },
  paragraph: {
    fontSize: "1.5rem",
    color: "#ffffffad",
    width: "55%",
    textAlign: "center",
    lineHeight: "25px",
    marginBottom: "10px",
    [theme.breakpoints.down("md")]: {
      fontSize: "1rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.8rem",
    },
  },
  Button: {
    color: "#fff",
    "&:hover": {
      backgroundColor: "#a21caf42",
      color: "#A21CAF",
    },
  },
  customToolTip: {
    fontSize: "0.8rem",
    backgroundColor: "#ffffff",
    color: "#000000",
  },
}));

const Footer = () => {
  const Styles = useStyles();

  return (
    <footer className={Styles.footer}>
      <Logo />
      <Typography component="h3" className={Styles.h3}>
        We Collaborate with ambitious Brands
      </Typography>
      <Typography paragraph={true} className={Styles.paragraph}>
        Let's Build Something Great Togerther
      </Typography>
      <Divider style={{ margin: "15px auto", width: 60 }} />
      <Grid container justify={"space-evenly"} spacing={2} alignItems="center">
        <Grid item xs={3} sm={3} md={1}>
          <ToolTip title="Twitter" classes={{ tooltip: Styles.customToolTip }}>
            <Link
              href="https://twitter.com/login?lang=en"
              rel="noopener noreferrer"
              target="_blank"
              color="inherit"
            >
              <IconButton className={Styles.Button}>
                <TwitterIcon style={{ fontSize: 40 }} />
              </IconButton>
            </Link>
          </ToolTip>
        </Grid>
        <Grid item xs={3} sm={3} md={1}>
          <ToolTip title="FaceBook" classes={{ tooltip: Styles.customToolTip }}>
            <Link
              href="https://www.facebook.com/"
              rel="noopener noreferrer"
              target="_blank"
              color="inherit"
            >
              <IconButton className={Styles.Button}>
                <FacebookIcon style={{ fontSize: 40 }} />
              </IconButton>
            </Link>
          </ToolTip>
        </Grid>
        <Grid item xs={3} sm={3} md={1}>
          <ToolTip title="YouTube" classes={{ tooltip: Styles.customToolTip }}>
            <Link
              href="https://www.youtube.com/"
              rel="noopener noreferrer"
              target="_blank"
              color="inherit"
            >
              <IconButton className={Styles.Button}>
                <YouTubeIcon style={{ fontSize: 40 }} />
              </IconButton>
            </Link>
          </ToolTip>
        </Grid>
        <Grid item xs={3} sm={3} md={1}>
          <ToolTip
            title="Pinterest"
            classes={{ tooltip: Styles.customToolTip }}
          >
            <Link
              href="https://in.pinterest.com/login/"
              rel="noopener noreferrer"
              target="_blank"
              color="inherit"
            >
              <IconButton className={Styles.Button}>
                <PinterestIcon style={{ fontSize: 40 }} />
              </IconButton>
            </Link>
          </ToolTip>
        </Grid>
      </Grid>
      <Divider
        style={{ margin: "20px auto", width: "50%", background: "white" }}
      />
      <Typography variant="h6" align={"center"}>
        © Copyright 2021. All Rights Reserved.
      </Typography>
    </footer>
  );
};

export default Footer;
