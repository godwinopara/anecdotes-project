import { useDispatch } from "react-redux";
import { vote, voteAnecdote } from "../reducers/anecdoteReducer";
import { setMessage } from "../reducers/notificationReducer";

const Anecdote = ({ anecdote }) => {
	const dispatch = useDispatch();

	const handleVote = () => {
		const anecdoteToUpdate = { ...anecdote, votes: anecdote.votes + 1 };
		console.log(anecdoteToUpdate);
		dispatch(voteAnecdote(anecdoteToUpdate));

		dispatch(setMessage({ message: `you voted ${anecdote.content}`, display: true }));

		setTimeout(() => {
			dispatch(setMessage({ message: "", display: false }));
		}, 5000);
	};

	return (
		<div key={anecdote.id}>
			<div>{anecdote.content}</div>
			<div>
				has {anecdote.votes}
				<button onClick={handleVote}>vote</button>
			</div>
		</div>
	);
};

export default Anecdote;
