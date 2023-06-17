import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	message: "",
	display: false,
};

// const initialState = "No message";

const messageSlice = createSlice({
	name: "message",
	initialState,
	reducers: {
		setMessage(state, action) {
			// const newState = { message: action.payload.message };
			// console.log(newState);
			return action.payload;
			// state = newState;
		},
	},
});

export const { setMessage } = messageSlice.actions;

export default messageSlice.reducer;
