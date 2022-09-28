import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: 0 };

const favSlice = createSlice({
	name: "addFav",
	initialState,
	reducers: {
		increment(state) {
			state.value++;
		},
		decrement(state) {
			state.value--;
		},
	},
});

export const { increment, decrement } = favSlice.actions;
export default favSlice.reducer;
