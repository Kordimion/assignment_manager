import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("assignments")) || [];

const slice = createSlice({
    name: "assignments",
    initialState: initialState,
    reducers: {
        addAssignment: ( state, action ) => {
            const { title, id } = action.payload;
            return [{
                title: title,
                id: id,
                isCompleted: false
            }, {...state}];
        },
        removeAssignment: ( state, action ) => state.filter(
            obj => obj.id === action.payload.id
        ),
        completeAssignment: ( state, action ) => state.map(
            obj => (obj.id = action.payload.id ? obj.isCompleted = !obj.isCompleted : null)
        )
    }
});

export const { addAssignment, removeAssignment, completeAssignment } = slice.actions;
export default slice.reducer;