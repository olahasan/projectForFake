import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        isLoggedIn: false,
        name: 'kareem nour'
    } ,
    reducers: {
        logInOut: (state, action) => {
            state.isLoggedIn =!state.isLoggedIn
        }
    },
})
export const { logInOut } = authSlice.actions;

export default authSlice.reducer
