import React from 'react'

import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider'
import Paper from '@material-ui/core/Paper';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: "200px",
    },
}));

function SidebarContent() {
    const classes = useStyles();

    return (
        <Paper className={classes.root}> 
            <Button variant="contained" color="primary">Inbox</Button>
            <Divider />
            <Button variant="contained" color="secondary">Other</Button>
        </Paper>
    )
}

export default SidebarContent
