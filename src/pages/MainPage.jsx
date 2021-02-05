import React from 'react'

import Grid from '@material-ui/core/Grid';
import Navbar from '../components/Navbar';
import Assignments from '../components/Assignments';
import Hidden from '@material-ui/core/Hidden';
import SidebarContent from '../components/SidebarContent';
import Paper from '@material-ui/core/Paper';

function MainPage() {
    return (
        <Grid container spacing={1} alignItems="stretch">
            <Grid item xs={12}>
                <Navbar />
            </Grid>
            <Hidden xsDown>
                <Grid item xs={3}>
                    <Paper>
                        <SidebarContent />
                    </Paper>
                </Grid>
            </Hidden>
            
            <Grid item xs={12} sm={9}>
                <Assignments />
            </Grid>
        </Grid>
    )
}

export default MainPage
