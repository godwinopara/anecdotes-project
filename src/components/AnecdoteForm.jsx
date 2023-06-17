import React from "react";
import { useDispatch } from "react-redux";
import { createNewAnecdote } from "../reducers/anecdoteReducer";

const AnecdoteForm = () => {
	const dispatch = useDispatch();

	const addAnecdoteForm = async (e) => {
		e.preventDefault();
		const anecdote = e.target.anecdote.value;
		dispatch(createNewAnecdote(anecdote));
		e.target.anecdote.value = "";
	};

	return (
		<form onSubmit={addAnecdoteForm}>
			<h2>create new</h2>
			<div>
				<input name="anecdote" />
			</div>
			<button>Create</button>
		</form>
	);
};

export default AnecdoteForm;
