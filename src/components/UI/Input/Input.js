import React from "react";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const CustomTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#A21CAF",
    },
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "#A21CAF",
      },
    },
  },
})(TextField);

const Input = (props) => {
  return (
    <React.Fragment>
      <CustomTextField
        required
        variant="outlined"
        type={props.type}
        value={props.value}
        name={props.name}
        label={props.label}
        fullWidth
        onChange={props.onChange}
        error={props.error}
        helperText={props.message}
      />
    </React.Fragment>
  );
};

export default Input;
