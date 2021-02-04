import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/icons/Menu';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    loginBtn: {
        marginRight: "1rem",
    },
    title: {
        flexGrow: 1,
    }

})

function Navbar() {
    const classes = useStyles();

    return (
        <AppBar position="static">
        <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
            <Menu />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
            Assignments Manager
            </Typography>
            <Button color="inherit" className={classes.loginBtn}>Login</Button>
        </Toolbar>
        </AppBar>
    )
}

export default Navbar
