import React from 'react'

import { connect } from 'react-redux';

import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import LessonSettingsItem from './LessonSettingsItem';

const mapStateToProps = (state) => {
    let lessonIds = [];
    lessonIds = Object.keys(state.lessons);
    return {
        ids: lessonIds 
    };
}

function LessonsSettingsList(props) {
    return (
        <Paper>
            <List aria-label="assignments"> 
                {props.ids.map((id) => (
                    <LessonSettingsItem id={id} key={id} />
                ))}
                <Divider />
            </List>
        </Paper>
    )
}

export default connect(mapStateToProps, null)(LessonsSettingsList)
