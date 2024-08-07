import { createSlice } from "@reduxjs/toolkit";

const authState = {
    token: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState: authState,
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload.token;
        },
    },
});

export default authSlice;
export const { setToken } = authSlice.actions;
