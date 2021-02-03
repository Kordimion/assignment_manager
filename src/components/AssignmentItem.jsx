import { Checkbox, ListItem, IconButton, ListItemText } from '@material-ui/core';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import React from 'react';
import { removeAssignmentAction, completeAssignmentAction } from '../redux/ducks/assignments';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
    return state.assignments[ownProps.id];
}

const mapDispatchToProps = {
    removeAssignmentAction,
    completeAssignmentAction
}

function AssignmentItem(props) {
    const {id, title, isCompleted,completeAssignmentAction, removeAssignmentAction} = props;

    return (
        <ListItem key={id}>
            <Checkbox 
                icon={<RadioButtonUncheckedIcon />}
                checkedIcon={<CheckCircleOutlineIcon />} 
                checked={isCompleted}
                onClick={() => completeAssignmentAction(props.id)}
            />
            <ListItemText classes={ {
                root: isCompleted ? "assignment-completed" : null
            }}>
               {title}
            </ListItemText>
            <IconButton aria-label="delete remove" onClick={() => removeAssignmentAction(props.id)}>
                <HighlightOffIcon />
            </IconButton>
        </ListItem>
    )
}

export default connect(mapStateToProps,mapDispatchToProps)(AssignmentItem);
