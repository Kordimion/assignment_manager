import React from 'react'

import Grid from '@material-ui/core/Grid';
import Navbar from '../components/Navbar';
import Assignments from '../components/Assignments';

function MainPage() {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Navbar />
            </Grid>
            <Grid item xs={12}>
                <Assignments />
            </Grid>
        </Grid>
    )
}

export default MainPage
