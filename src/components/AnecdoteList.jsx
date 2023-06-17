import Anecdote from "./Anecdote";
import { useSelector } from "react-redux";
const AnecdoteList = () => {
	const anecdotes = useSelector((state) => state.anecdotes);
	return (
		<div>
			<h2>Anecdotes</h2>
			{anecdotes.map((anecdote) => (
				<Anecdote key={anecdote.id} anecdote={anecdote} />
			))}
		</div>
	);
};

export default AnecdoteList;
