import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

const initialState = JSON.parse(localStorage.getItem("assignments")) || [];

const slice = createSlice({
    name: "assignments",
    initialState: initialState,
    reducers: {
        addAssignment: ( state, action ) => {
            const { title, id } = action.payload;
            state.push({
                title: title,
                id: id,
                isCompleted: false
            });
        },
        removeAssignment: ( state, action ) => state.filter(
            obj => obj.id !== action.payload.id
        ),
        completeAssignment: ( state, action ) => state.map(
            obj => {
                if(obj.id === action.payload.id) return {...obj, isCompleted: !obj.isCompleted};
                return obj;
            }
        )
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