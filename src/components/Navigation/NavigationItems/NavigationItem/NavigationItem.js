import React from 'react';
import {NavLink} from 'react-router-dom'
import {makeStyles} from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';


const useStyles = makeStyles((theme)=>({
    NavigationItem:{
        color:'white',
        padding:'12px 2px',
        margin:'5px',
        alignItems:'center',
        display:'flex',
    '&:hover':{
        color:"#A21CAF"
    }
    },
    Active:{
        color:'#A21CAF'
    },
    Item:{
        fontSize:'1.2rem',
        textTransform:'uppercase'
    }
}))

const NavigationItem = (props) => {
    const Styles = useStyles();
    return(
    <ListItem className={Styles.NavigationItem} component={NavLink} to={props.Link} activeClassName={Styles.Active}>
        <Typography className={Styles.Item}>
                {props.children}
            </Typography>
        <ListItemIcon style={{color:'inherit',marginLeft:'5px'}}>
            {props.Icon}
        </ListItemIcon>
    </ListItem>
    )
}
export default NavigationItem;