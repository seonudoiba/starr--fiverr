import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
	reducerPath: "api",
	baseQuery: fetchBaseQuery({ baseUrl: "https://starr-fiverr-api.vercel.app" }),
	tagTypes: ["Services"],
	endpoints: (builder) => ({
		getServices: builder.query({
			query: () => "/services",
			providesTags: ["Services"],
		}),
		getFavourites: builder.query({
			query: () => "/favs",
			providefTags: ["Favourites"],
		}),
		addServices: builder.mutation({
			query: (service) => ({
				url: "/services",
				method: "POST",
				body: service,
			}),
			invalidatesTags: ["Services"],
		}),
		addFavourites: builder.mutation({
			query: (favourite) => ({
				url: "/favs",
				method: "POST",
				body: favourite,
			}),
			invalidatesTags: ["Favourites"],
		}),
		// updateTodo: builder.mutation({
		//     query: (todo) => ({
		//         url: `/services/${todo.id}`,
		//         method: 'PATCH',
		//         body: todo
		//     }),
		//     invalidatesTags: ['Services']
		// }),
		deleteFavourite: builder.mutation({
		    query: ({ id }) => ({
		        url: `/favs/${id}`,
		        method: 'DELETE',
		        body: id
		    }),
		    invalidatesTags: ['Todos']
		}),
	}),
});

export const {
	useGetServicesQuery,
	useAddServicesMutation,
	useAddFavouritesMutation,
    useGetFavouritesQuery,
	// useUpdateServicesMutation,
	useDeleteFavouriteMutation
	
} = apiSlice;
export default apiSlice.reducer;
