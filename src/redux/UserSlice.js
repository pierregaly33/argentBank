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
        getUserProfile: builder.query({
            query: () => ({
                url: "/user/profile",
                method: "POST",
            }),
            providesTags: ["profile"],
        }),
        putUserProfile: builder.mutation({
            query: ({ firstName, lastName }) => ({
                url: "/user/profile",
                method: "PUT",
                body: { firstName, lastName },
            }),
            invalidatesTags: ["profile"],
        }),
    }),
});

export const { usePostUserLoginMutation, usePutUserProfileMutation, useGetUserProfileQuery } = argentBankApi;
