import React from 'react'

import Grid from '@material-ui/core/Grid';
import Navbar from '../components/Navbar';
import Assignments from '../components/Assignments';
import Hidden from '@material-ui/core/Hidden';
import SidebarContent from '../components/Sidebar/SidebarContent';
import { Typography } from '@material-ui/core';

function MainPage(props) {
    return (
        <Grid container spacing={1} alignItems="stretch">
            <Grid item xs={12}>
                <Navbar />
            </Grid>
            <Hidden xsDown>
                <Grid item xs={4} lg={3} xl={2}>
                    <SidebarContent />
                </Grid>
            </Hidden>
            
            <Grid item xs={12} sm={8} lg={9} xl={10}>
                <Typography variant="h1"></Typography>
                <Assignments />
            </Grid>
        </Grid>
    )
}

export default MainPage
