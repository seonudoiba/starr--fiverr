// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// export const favApiSlice = createApi({
//     reducerPath: 'api',
//     baseQuery: fetchBaseQuery({ baseUrl: 'https://starr-fiverr-api.vercel.app' }),
//     tagTypes: ['Favourites'],
//     endpoints: (builder) => ({
//         getFavourites: builder.query({
//             query: () => '/favs',
//             providefTags: ['Favourites']
//         }),
//         addFavourites: builder.mutation({
//             query: (favourite) => ({
//                 url: '/favourites',
//                 method: 'POST',
//                 body: favourite
//             }),
//             invalidatesTags: ['Favourites']
//         }),
//         // updateTodo: builder.mutation({
//         //     query: (todo) => ({
//         //         url: `/savourites/${todo.id}`,
//         //         method: 'PATCH',
//         //         body: todo
//         //     }),
//         //     invalidatesTags: ['Savourites']
//         // }),
//         // deleteTodo: builder.mutation({
//         //     query: ({ id }) => ({
//         //         url: `/savourites/${id}`,
//         //         method: 'DELETE',
//         //         body: id
//         //     }),
//         //     invalidatesTags: ['Todos']
//         // }),
//     })
// })

// export const {
//     useGetFavouritesQuery,
//     useAddFavouritesMutation,
//     // useUpdateSavouritesMutation,
//     // useDeleteSavouritesMutation
// } = favApiSlice
// export default favApiSlice.reducer;