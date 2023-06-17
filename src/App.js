import { useEffect } from "react";
import { useDispatch } from "react-redux";

import AnecdoteForm from "./components/AnecdoteForm";
import AnecdoteList from "./components/AnecdoteList";
import Notification from "./components/Notification";
import { initializeAnecdote } from "./reducers/anecdoteReducer";

const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(initializeAnecdote());

		//eslint-disable-next-line
	}, []);

	return (
		<>
			<Notification />
			<AnecdoteList />
			<AnecdoteForm />
		</>
	);
};

export default App;
