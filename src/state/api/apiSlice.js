import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const BASE_API_URL ="http://localhost:50000";

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:50000' }),
    endpoints: (builder) => ({
        createContact: builder.mutation({
            query: (contact) => ({
                url: '/contact/createContact',
                method: 'POST',
                body: contact,
            }),
        }),
        getContacts: builder.query({
            query: () => ({
                url: '/contact/getContacts',
                method: 'GET',
            }),
        }),
        updateContact: builder.mutation({
            query: ({ id, ...contact }) => ({
                url: `/contact/updateContact/${id}`,
                method: 'PUT',
                body: contact,
            }),
        }),
    }),
});
export const { useCreateContactMutation, useGetContactsQuery, useUpdateContactMutation } = apiSlice;
  
export const getContactReportUrl = (
    contactId, 
    
) =>{
    console.log("contactId", contactId)
    return  `http://localhost:50000/contact/${contactId}/report`;
}
   

