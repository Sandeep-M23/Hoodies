//TO DISPLAY MESSAGES ON PAGES WITH SNACKBAR BY USING IT AS A HIGHER ORDER COMPONENT

// import React,{useState} from 'react';
// import Snackbar from '@material-ui/core/Snackbar';
// import Alert from '@material-ui/lab/Alert';
// import Slide from '@material-ui/core/Slide';

// const WithMessageHandler = WrappedComponent => {

//     return function WithMessageHandler({props,displayMessage}){
//         const [open,setOpen] = useState(false);
//         const [message,setMessage] = useState("");
//         const [severity,setSeverity] = useState("success");

//         const showMessage = (message,severity)=>{
//             setMessage(message);
//             setSeverity(severity);
//             setOpen(true);
//         };

//         const handleClose = (event,reason)=>{
//             if(reason==="clickaway"){
//                 return;
//             }
//             setOpen(false);
//         };

//         return (
//           <React.Fragment>
//             <WrappedComponent {...props} displayMessage={showMessage} />
//             <Snackbar
//               open={open}
//               autoHideDuration={2000}
//               onClose={handleClose}
//               anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
//               TransitionComponent={Slide}
//             >
//               <Alert
//                 variant="filled"
//                 severity={severity}
//                 onClose={handleClose}
//               >
//                 {message}
//               </Alert>
//             </Snackbar>
//           </React.Fragment>
//         );
//     }
// }
// export default WithMessageHandler;
