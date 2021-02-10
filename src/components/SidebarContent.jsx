import React from 'react'

import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider'
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

import SidebarLessons from './SidebarLessons';
const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: "200px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "stretch"
    },
    divider: {
        marginTop: `${theme.spacing(1)}px`,
        marginBottom: `${theme.spacing(1)}px`,
    }
}));

function SidebarContent(props) {
    const classes = useStyles();
    
    return (
        <Paper className={classes.root}> 
            <Button size="large" variant="contained" color="primary">Inbox</Button>
            <Divider className={classes.divider} />
            <SidebarLessons />
        </Paper>
    )
}

export default SidebarContent; 
