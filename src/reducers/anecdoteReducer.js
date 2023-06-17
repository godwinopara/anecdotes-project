import { createSlice } from "@reduxjs/toolkit";
import anecdoteService from "../services/anecdote";

const initialState = [];

const anecdoteSlice = createSlice({
	name: "anecdotes",
	initialState,
	reducers: {
		vote(state, action) {
			const id = action.payload;
			return state.map((anacd) => (anacd.id !== action.payload.id ? anacd : action.payload));
		},

		add(state, action) {
			state.push(action.payload);
		},

		setAnecdote(state, action) {
			return action.payload;
		},
	},
});

// REDUX THUNK

export const initializeAnecdote = () => {
	return async (dispatch) => {
		const anecdotes = await anecdoteService.getAll();
		dispatch(setAnecdote(anecdotes));
	};
};

export const createNewAnecdote = (data) => {
	return async (dispatch) => {
		const newAnecdote = await anecdoteService.createNew(data);
		dispatch(add(newAnecdote));
	};
};

export const voteAnecdote = (data) => {
	return async (dispatch) => {
		const updateVote = await anecdoteService.updateVote(data);
		dispatch(vote(updateVote));
	};
};

// ACTION CREATORS

export const { vote, add, setAnecdote } = anecdoteSlice.actions;

export default anecdoteSlice.reducer;
