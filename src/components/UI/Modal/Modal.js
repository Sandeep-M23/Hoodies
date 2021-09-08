import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Box from '@material-ui/core/Box';


const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    textAlign: "center",
    top: "40%",
    left: "33%",
    width: 450,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    [theme.breakpoints.down("md")]: {
    width: 400,
    },
    [theme.breakpoints.down("sm")]: {
      left: "17%",
      width: 350,
    },
    [theme.breakpoints.down("xs")]: {
      left: "20%",
      width: 300,
    },
  },
}));

const SimpleModal = (props) =>{
  const Styles = useStyles();

  const body=(
    <Box component="div" className={Styles.paper}>
       {props.children}
    </Box>
  )

  return (
    <Modal
      open={props.open}
      onClose={props.close}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
        {body}
    </Modal>
  );
}

export default SimpleModal;