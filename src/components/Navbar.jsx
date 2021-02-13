import React, { useState } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/icons/Menu';
import SidebarContent from './Sidebar/SidebarContent';
import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';

const useStyles = makeStyles((theme) => ({
    loginBtn: {
        marginRight: "1rem",
    },
    title: {
        flexGrow: 1,
    }
}))


function Navbar() {
    const classes = useStyles();
    const [isOpen, setIsOpen] = useState(false); 

    const toggleDrawer = openFlag => event => {
        if(event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) return;
        
        setIsOpen(openFlag);
    }
    
    
    return (
        <React.Fragment>
            <AppBar position="static">
            <Toolbar>
                <Hidden smUp>
                    <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
                        <Menu />
                    </IconButton>
                </Hidden>
                <Typography variant="h6" className={classes.title}>
                Assignments Manager
                </Typography>
                <Button color="inherit" className={classes.loginBtn}>Login</Button>
            </Toolbar>
            </AppBar>
            <Drawer anchor="left" open={isOpen} onClose={ toggleDrawer(false) }>
                <SidebarContent />
            </Drawer>
        </React.Fragment>
    )
}

export default Navbar
