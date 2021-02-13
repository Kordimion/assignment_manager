import React from 'react';

import { removeLessonAction, editLessonAction } from '../../redux/ducks/lessons';
import { connect } from 'react-redux';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import EditIcon from '@material-ui/icons/Edit';

const mapStateToProps = (state, ownProps) => {
    return state.lessons[ownProps.id];
}

const mapDispatchToProps = {
    removeLessonAction,
    editLessonAction
}


function LessonSettingsItem(props) {
    return (
        <ListItem key={props.id}>
            <ListItemText >
               {props.title}
            </ListItemText>
            <IconButton aria-label="edit rename" onClick={() => props.editLessonAction({id: props.id, title: props.title})}>
                <EditIcon />
            </IconButton>
            <IconButton aria-label="delete remove" onClick={() => props.removeLessonAction({id: props.id})}>
                <HighlightOffIcon />
            </IconButton>
            
        </ListItem>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(LessonSettingsItem);
