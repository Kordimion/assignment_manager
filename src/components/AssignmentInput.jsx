import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import { InputBase, IconButton } from '@material-ui/core';
import AddCircleOutlineRoundedIcon from '@material-ui/icons/AddCircleOutlineRounded';


function AssignmentInput() {
    return (
        <ListItem>
            <InputBase 
                placeholder="add an assignment"
                inputProps={{ 'aria-label' : "add new create"}}
                fullWidth
            />
            
            <IconButton>
                <AddCircleOutlineRoundedIcon />
            </IconButton>
        </ListItem>
    )
}

export default AssignmentInput
