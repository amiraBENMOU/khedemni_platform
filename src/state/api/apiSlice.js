import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:50000' }),
    endpoints: (builder) => ({
        //create Contact 
        createContact: builder.mutation({
            query: (contact) => ({
                url: '/contact/createContact',
                method: 'POST',
                body: contact,
            }),
        }),
        //filter  Contacts 
        getContacts: builder.query({
            query: () => ({
                url: '/contact/getContacts', // Ensure the URL is correct
                method: 'GET',
            }),
        }),
        
    }),
});

export const { useCreateContactMutation, useGetContactsQuery } = apiSlice;