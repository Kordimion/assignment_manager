import React from 'react'

import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';

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
    },
    button: {

    }
}));

function SidebarContent() {
    const classes = useStyles();

    return (
        <Paper className={classes.root}> 
            <Button size="large" variant="contained" color="primary"  className={classes.button}>Inbox</Button>
            <Divider className={classes.divider} />
            <Typography variant="h5" align="center">Lessons</Typography>
            <ButtonGroup
                orientation="vertical"
                aria-label="vertical contained button group"
                variant="contained"
            >
                <Button size="large" align="left">Math</Button>
                <Button size="large">Physics</Button>
                <Button size="large">Chemistry</Button>
            </ButtonGroup>
        </Paper>
    )
}

export default SidebarContent
