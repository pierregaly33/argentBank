import { configureStore } from "@reduxjs/toolkit";
import { argentBankApi } from "./UserSlice";

export default configureStore({
    reducer: {
        argentBank: argentBankApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(argentBankApi.middleware),
});
