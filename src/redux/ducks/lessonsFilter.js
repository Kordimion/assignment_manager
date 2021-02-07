import { createSlice } from "@reduxjs/toolkit";

const initialState = sessionStorage.getItem("currentLesson") || "";

const slice = createSlice({
    name: "lessonsFilter",
    initialState: initialState,
    reducers: {
        setLesson: ( state, action ) => {
            state = action.payload.lesson;
            return state
        }
    }
});

export const setLessonAction = content => ({
    type: slice.actions.setLesson.toString(),
    payload: {
        lesson: content,
    }
});

export const { setLesson } = slice.actions;
export default slice.reducer;