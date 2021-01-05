import React, { useState } from 'react';
import ListItem from '@material-ui/core/ListItem';
import { InputBase, IconButton } from '@material-ui/core';
import AddCircleOutlineRoundedIcon from '@material-ui/icons/AddCircleOutlineRounded';
import { addAssignmentAction } from '../redux/ducks/assignments';
import { connect } from 'react-redux';

function AssignmentInput(props) {
    const [inputValue, setInputValue] = useState("");
    
    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        if(inputValue !== "") {
            props.addAssignmentAction(inputValue);
            setInputValue("");
        }
    }

    return (
        <ListItem key="create-element">
            <InputBase 
                placeholder="add an assignment"
                inputProps={{ 'aria-label' : "add new create"}}
                fullWidth
                autoFocus
                onKeyDown={(e) => {
                    if(e.key === "Enter") handleSubmit(e);
                }}
                value={inputValue}
                onChange={handleChange}
            />
            
            <IconButton onClick={ handleSubmit }>
                <AddCircleOutlineRoundedIcon />
            </IconButton>
        </ListItem>
    )
}

export default connect(null, {addAssignmentAction})(AssignmentInput)
