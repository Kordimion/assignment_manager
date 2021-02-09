import React from 'react'
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

import { connect } from 'react-redux';
import { setLessonAction } from '../redux/ducks/lessonsFilter';

const mapStateToProps = (state, ownProps) => {
    return { lesson : state.currentLesson };
}

const mapDispatchToProps = {
    setLessonAction
}

function SidebarLessons(props) {
    const { lesson, setLessonAction } = props;

    const lessonButton = (title) => (
        <Button size="large" color={lesson === title ? "primary" : ""} onClick={() => {setLessonAction(title)}} >{title}</Button>
    )

    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="lessons-panel"
                id="lessons-panel"
            >
                <Typography variant="h6">{props.lesson}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <ButtonGroup
                    orientation="vertical"
                    aria-label="vertical contained button group"
                    variant="contained"
                >
                    {lessonButton("math")}
                    {lessonButton("physics")}
                    {lessonButton("chemistry")}
                </ButtonGroup>
            </AccordionDetails>
        </Accordion>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(SidebarLessons);
