import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    assignments: JSON.parse(localStorage.getItem("assignments")) || {},
};

const slice = createSlice({
    name: "assignments",
    initialState: initialState,
    reducers: {
        addAssignment: ( state, action ) => {
            state.assignments[action.payload.id] = {
                title: action.payload.title,
                isCompleted: false
            }
        },
        removeAssignment: ( state, action ) => {
            delete state.assignments[action.payload.id];
        },
        completeAssignment: ( state, action ) => {
            state.assignments[action.payload.id].isCompleted = !state.assignments[action.payload.id].isCompleted;
        }
    }
});

export const addAssignmentAction = content => ({
    type: slice.actions.addAssignment.toString(),
    payload: {
        id: uuidv4(),
        isCompleted: false,
        title: content
    }
});

export const removeAssignmentAction = content => ({
    type: slice.actions.removeAssignment.toString(),
    payload: {
        id: content,
    }
});

export const completeAssignmentAction = content => ({
    type: slice.actions.completeAssignment.toString(),
    payload: {
        id: content
    }
});

export const { addAssignment, removeAssignment, completeAssignment } = slice.actions;
export default slice.reducer;