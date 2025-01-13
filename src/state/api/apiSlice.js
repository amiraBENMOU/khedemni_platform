import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


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
        // fetchUsersWithContacts: builder.mutation({
          //  query: () => ({
              //  url: '/contact//fetchUserContact',
              //  method: 'GET',
         //   }),
       // }),

        //signIn and signUp
        signUp: builder.mutation({
            query: (userData) => ({
                url: '/user/signUp',
                method: 'POST',
                body: userData,
            }),
        }),
        signIn: builder.mutation({
            query: (userData) => ({
                url: '/user/signIn',
                method: 'POST',
                body: userData,
            }),
            async onQueryStarted(arg, { queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    localStorage.setItem('token', data.token);
                } catch (error) {
                    console.error('Failed to sign in:', error);
                }
            },
        }),
        }),
});
export const { useCreateContactMutation, useGetContactsQuery, useUpdateContactMutation,useDeleteContactMutation , useSignUpMutation, useSignInMutation  } = apiSlice;
  
export const getContactReportUrl = (
    contactId, 
    
) =>{
    console.log("contactId", contactId)
    return  `http://localhost:50000/contact/${contactId}/report`;
}
   

