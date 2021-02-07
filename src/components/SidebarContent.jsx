import React from 'react'

import Typography from '@material-ui/core/Typography';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider'
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

import { connect } from 'react-redux'
import { setLessonAction } from '../redux/ducks/lessonsFilter';

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

const mapStateToProps = (state, ownProps) => {
    return {lesson : state.currentLesson};
}

const mapDispatchToProps = {
    setLessonAction
}

function SidebarContent(props) {
    const classes = useStyles();
    const { lesson, setLessonAction } = props;
    
    const lessonButton = (title) => (
        <Button size="large" color={lesson === title ? "primary" : ""} onClick={() => {setLessonAction(title)}} >{title}</Button>
    )

    return (
        <Paper className={classes.root}> 
            <Button size="large" variant="contained" color="primary" onClick={() => setLessonAction("")}>Inbox</Button>
            <Divider className={classes.divider} />
            <Typography variant="h5" align="center">Lessons</Typography>
            <ButtonGroup
                orientation="vertical"
                aria-label="vertical contained button group"
                variant="contained"
            >
                {lessonButton("math")}
                {lessonButton("physics")}
                {lessonButton("chemistry")}
            </ButtonGroup>
        </Paper>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(SidebarContent); 
