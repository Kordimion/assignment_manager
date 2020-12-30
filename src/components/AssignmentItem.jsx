import { Checkbox, ListItem, IconButton, ListItemText } from '@material-ui/core';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import React from 'react';

function AssignmentItem() {
    return (
        <ListItem>
            <Checkbox 
                icon={<RadioButtonUncheckedIcon />}
                checkedIcon={<CheckCircleOutlineIcon />} 
            />
            <ListItemText>
                example text asdffffff ffffffff ffffffffffff fffffffffff 
                sdfasf sd fassds sd afsdf sa 
            </ListItemText>
            <IconButton aria-label="delete">
                <HighlightOffIcon />
            </IconButton>
        </ListItem>
    )
}

export default AssignmentItem
