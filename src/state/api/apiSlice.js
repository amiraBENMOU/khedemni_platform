import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:50000' }),
    endpoints: (builder) => ({
        createContact: builder.mutation({
            query: (contact) => ({
              //all the problem was here ! 
                url: '/contact/createContact',
                method: 'POST',
                body: contact,
            }),
        }),
    }),
});

export const { useCreateContactMutation } = apiSlice;