import { Checkbox, ListItem, IconButton, ListItemText } from '@material-ui/core';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import React, { useState } from 'react';

function AssignmentItem(props) {
    const [completed, setCompleted] = useState(false);
    const {id, title, remove, complete} = props;

    return (
        <ListItem key={id}>
            <Checkbox 
                icon={<RadioButtonUncheckedIcon />}
                checkedIcon={<CheckCircleOutlineIcon />} 
                onChange={() => {
                    setCompleted(prev => !prev);
                    complete(!completed);
                }}
                checked={completed}
            />
            <ListItemText classes={ {
                root: completed ? "assignment-completed" : null
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
