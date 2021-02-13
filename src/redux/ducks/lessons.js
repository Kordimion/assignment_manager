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
        },
        editLesson: (state, action ) => {
            state[action.payload.id] = {
                title: action.payload.title
            }
        }
    }
});

export const addLessonAction = content => ({
    type: slice.actions.addLesson.toString(),
    payload: {
        id: uuidv4(),
        title: content.title
    }
});

export const removeLessonAction = content => ({
    type: slice.actions.removeLesson.toString(),
    payload: {
        id: content.id
    }
});

export const editLessonAction = content => ({
    type: slice.actions.editLesson.toString(),
    payload: {
        id: content.id, 
        title: content.title
    }
})

export const { addLesson, removeLesson, editLesson } = slice.actions;
export default slice.reducer;