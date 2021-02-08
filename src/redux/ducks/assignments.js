import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

const initialState = JSON.parse(localStorage.getItem("assignments")) || {"123": {title: "123", isCompleted: false}};

const slice = createSlice({
    name: "assignments",
    initialState: initialState,
    reducers: {
        addAssignment: ( state, action ) => {
            state[action.payload.id] = {
                title: action.payload.title,
                isCompleted: false
            }
            if(action.payload.lesson) state[action.payload.id].lesson = action.payload.lesson;
        },
        removeAssignment: ( state, action ) => {
            delete state[action.payload.id];
        },
        completeAssignment: ( state, action ) => {
            const currentStatus = state[action.payload.id].isCompleted;
            state[action.payload.id].isCompleted = !currentStatus;
        }
    }
});

export const addAssignmentAction = content => ({
    type: slice.actions.addAssignment.toString(),
    payload: {
        id: uuidv4(),
        isCompleted: false,
        title: content.title,
        lesson: content.lesson
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