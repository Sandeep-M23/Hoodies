import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "40px 15px",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#A12CAF",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#A12CAF",
    color: "white",
    "&:hover": {
      backgroundColor: "#7e1f89",
    },
  },
  notchedOutline: {
    borderWidth: "1.5px",
    borderColor: "black !important",
  },
  link: {
    color: "black",
  },
}));

const LoginCard = React.forwardRef((props, ref) => {
  const { emailInputRef, passwordInputRef } = ref;
  const Styles = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={Styles.paper}>
        <Avatar className={Styles.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h4" style={{ padding: "10px" }}>
          {props.login ? "LOGIN" : "SIGN UP"}
        </Typography>
        <form onSubmit={props.onSubmit} className={Styles.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                inputRef={emailInputRef}
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                InputProps={{
                  classes: { notchedOutline: Styles.notchedOutline },
                }}
                InputLabelProps={{ style: { color: "#000" } }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                inputRef={passwordInputRef}
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                InputProps={{
                  classes: { notchedOutline: Styles.notchedOutline },
                }}
                InputLabelProps={{ style: { color: "#000" } }}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={Styles.submit}
          >
            {props.login ? " Sign In" : "CREATE ACCOUNT"}
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Button onClick={props.onSwitchCard} className={Styles.link}>
                {props.login
                  ? "Don't have an account? Sign Up"
                  : "Already have an account? Sign in"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
});

export default LoginCard;
