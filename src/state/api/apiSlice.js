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
                url: `/contact/${id}/updateContact`,
                method: 'PUT',
                body: contact,
            }),
        }),
        deleteContact: builder.mutation({
            query: (id) => ({
                url: `/contact/${id}/deleteContact`,
                method: 'DELETE',
            }),
        }),
    }),
});
export const { useCreateContactMutation, useGetContactsQuery, useUpdateContactMutation,useDeleteContactMutation  } = apiSlice;
  
export const getContactReportUrl = (
    contactId, 
    
) =>{
    console.log("contactId", contactId)
    return  `http://localhost:50000/contact/${contactId}/report`;
}
   

