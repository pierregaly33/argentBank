import { createSlice } from "@reduxjs/toolkit";

const authState = {
    token: localStorage.getItem("token"),
    isAuth: localStorage.getItem("token") ? true : false,
};

const authSlice = createSlice({
    name: "auth",
    initialState: authState,
    reducers: {
        login: (state, action) => {
            if (action.payload.rememberMe) {
                localStorage.setItem("token", action.payload.token);
            }
            state.token = action.payload.token;
            state.isAuth = true;
        },
        logout: (state, action) => {
            state.token = null;
            state.isAuth = false;
            localStorage.removeItem("token");
        },
    },
});

export default authSlice;
export const { login, logout } = authSlice.actions;
