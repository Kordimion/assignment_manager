import React from 'react'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import IconButton from '@material-ui/core/IconButton';
import { connect } from 'react-redux';
import { setLessonAction } from '../redux/ducks/lessonsFilter';
import SettingsIcon from '@material-ui/icons/Settings';

import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';

const mapStateToProps = (state, ownProps) => {
    return { lesson : state.currentLesson };
}

const mapDispatchToProps = {
    setLessonAction
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%"
    },
    accordionTitle: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
    },
    accordionBody: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "stretch"
    }
}));

function SidebarLessons(props) {
    const { lesson, setLessonAction } = props;
    const [open, setOpen] = React.useState(true);
    const classes = useStyles();

    const lessonButton = (title) => (
        <Button size="large" color={lesson === title ? "primary" : ""} onClick={() => {setLessonAction(title)}} >{title}</Button>
    )

    return (

        <div className={classes.root} aria-label="lessons accordion">
            <div className={classes.accordionTitle} >
                <IconButton aria-label="settings">
                    <SettingsIcon />
                </IconButton>

                <Typography variant="h6">
                Lessons</Typography>
                
                <IconButton 
                    aria-label={ "toggle " + (open ? "open" : "close") } 
                    onClick={() => { setOpen(!open) }}
                >
                    {open ? <ExpandMoreIcon /> : <ExpandLessIcon />}
                </IconButton>
            </div>
            <Collapse in={open}>
            <div className={classes.accordionBody}>
                <ButtonGroup
                    orientation="vertical"
                    aria-label="vertical contained button group"
                    variant="contained"
                >
                    {lessonButton("math")}
                    {lessonButton("physics")}
                    {lessonButton("chemistry")}
                </ButtonGroup>
            </div>
            </Collapse>
            
        </div >
            
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(SidebarLessons);
