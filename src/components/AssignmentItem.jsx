import { Checkbox, ListItem, IconButton, ListItemText } from '@material-ui/core';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import React, { useState } from 'react';

function AssignmentItem(props) {
    const {id, title, remove, complete, isCompleted} = props;

    return (
        <ListItem key={id}>
            <Checkbox 
                icon={<RadioButtonUncheckedIcon />}
                checkedIcon={<CheckCircleOutlineIcon />} 
                onChange={() => {
                    complete(!isCompleted);
                }}
                checked={isCompleted}
            />
            <ListItemText classes={ {
                root: isCompleted ? "assignment-completed" : null
            }}>
               {title}
            </ListItemText>
            <IconButton aria-label="delete remove" onClick={remove}>
                <HighlightOffIcon />
            </IconButton>
        </ListItem>
    )
}

export default AssignmentItem
