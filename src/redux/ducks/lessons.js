import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

const initialState = JSON.parse(localStorage.getItem("lessons")) || {};

const slice = createSlice({
    name: "lessonsManager",
    initialState: initialState,
    reducers: {
        addLesson: ( state, action ) => {
            state[action.payload.id] = {
                title: action.payload.title
            }
        },
        removeLesson: ( state, action ) => {
            delete state[action.payload.id];
        }
    }
});

export const addLessonAction = content => ({
    type: slice.actions.completeAssignment.toString(),
    payload: {
        id: uuidv4(),
        title: content.title
    }
});

export const removeLessonAction = content => ({
    type: slice.actions.completeAssignment.toString(),
    payload: {
        id: content.id
    }
});

export const { addLesson, removeLesson } = slice.actions;
export default slice.reducer;