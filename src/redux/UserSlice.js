import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const argentBankApi = createApi({
    reducerPath: "argentBank",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3001/api/v1",
        prepareHeaders: (headers, { getState }) => {
            const token = getState().auth.token;
            headers.set("Authorization", `Bearer ${token}`);
        },
    }),
    endpoints: (builder) => ({
        postUserLogin: builder.mutation({
            query: ({ email, password }) => ({
                url: "/user/login",
                method: "POST",
                body: { email, password },
            }),
        }),
        postUserProfile: builder.mutation({
            query: () => ({
                url: "/user/profile",
                method: "POST",
            }),
        }),
        putUserProfile: builder.mutation({
            query: ({ firstName, lastName }) => ({
                url: "/user/profile",
                method: "PUT",
                body: { firstName, lastName },
            }),
        }),
    }),
});

export const { usePostUserLoginMutation, usePostUserProfileMutation, usePutUserProfileMutation } = argentBankApi;
