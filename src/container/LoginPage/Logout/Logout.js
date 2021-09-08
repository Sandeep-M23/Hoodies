import React , {useEffect,useContext} from 'react';
import { Redirect } from 'react-router';
import AuthContext from '../../../context/authContext';
import {useSnackbar,}  from 'notistack';

const Logout = props =>{

  //Authentication Context
  const authCtx = useContext(AuthContext);

  //To display Messages using Snackbar
  const { enqueueSnackbar } = useSnackbar();

  //To Logout 
  useEffect(() => {
    authCtx.logout();
    enqueueSnackbar(`SUCCESSGULLY LOGGED OUT`, { variant: "success" });
  }, [authCtx, enqueueSnackbar]);
  return <Redirect to="/" />;
}

export default Logout;