import { configureStore } from "@reduxjs/toolkit";
import { argentBankApi } from "./UserSlice";
import authSlice from "./AuthSlice";

const store = configureStore({
    reducer: {
        argentBank: argentBankApi.reducer,
        auth: authSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(argentBankApi.middleware),
});
export default store;
