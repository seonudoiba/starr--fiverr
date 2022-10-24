import { createSlice } from "@reduxjs/toolkit";

const initialState = [
	{
		favItems: [],
		totalCount: 0,
	},
];
// {
// 	Title: "",
// 	Description: "",
// 	Category: "",
// 	Tag: "",
// 	SubCategory: "",
// 	Price: 0,
// 	Image: "",
// };

const favSlice = createSlice({
	name: "addFav",
	initialState,
	reducers: {
		increment(state, action) {
	
			console.log(action.payload)
		},
		
		decrement(state, action) {
			state.favItems.pop(action.payload);
		},
	},
});

export const { increment, decrement } = favSlice.actions;
export default favSlice.reducer;
