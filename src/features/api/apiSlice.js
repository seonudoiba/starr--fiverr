import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://starr-fiverr-api.vercel.app' }),
    tagTypes: ['Services'],
    endpoints: (builder) => ({
        getServices: builder.query({
            query: () => '/services',
            // transformResponse: res => res.sort((a, b) => b.id - a.id),
            // providesTags: ['Todos']
        }),
        // addTodo: builder.mutation({
        //     query: (todo) => ({
        //         url: '/services',
        //         method: 'POST',
        //         body: todo
        //     }),
        //     invalidatesTags: ['Todos']
        // }),
        // updateTodo: builder.mutation({
        //     query: (todo) => ({
        //         url: `/services/${todo.id}`,
        //         method: 'PATCH',
        //         body: todo
        //     }),
        //     invalidatesTags: ['Todos']
        // }),
        // deleteTodo: builder.mutation({
        //     query: ({ id }) => ({
        //         url: `/services/${id}`,
        //         method: 'DELETE',
        //         body: id
        //     }),
        //     invalidatesTags: ['Todos']
        // }),
    })
})

export const {
    useGetServicesQuery,
    // useAddTodoMutation,
    // useUpdateTodoMutation,
    // useDeleteTodoMutation
} = apiSlice
export default apiSlice.reducer;