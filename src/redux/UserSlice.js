import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const argentBankApi = createApi({
    reducerPath: "argentBank",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api/v1" }),
    endpoints: (builder) => ({
        postUserLogin: builder.mutation({
            query: ({ email, password }) => ({
                url: "/user/login",
                method: "POST",
                body: { email, password },
            }),
        }),
    }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { usePostUserLoginMutation } = argentBankApi;
