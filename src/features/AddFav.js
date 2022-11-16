import { createSlice } from "@reduxjs/toolkit";

const initialState = [
	{
		// favItems: [],
		count: 0,
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
			state.count += 1
			// state.favItems = state.favItems.push(action.payload)
			
			// console.log(action.payload)
			
		},
		
		decrement(state, action) {
			state.count -= 1
		},
	},
});

export const { increment, decrement } = favSlice.actions;
export default favSlice.reducer;
