import { createSlice } from "@reduxjs/toolkit";

const initialState = "ALL";

const anecdoteFilterSlice = createSlice({
	name: "anecdoteFilter",
	initialState,
	reducers: {
		filterBy(state, action) {
			return action.payload;
		},
	},
});

export const { filterBy } = anecdoteFilterSlice.actions;

export default anecdoteFilterSlice.reducer;
