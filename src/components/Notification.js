import { useSelector } from "react-redux";

const Notification = () => {
	const { message, display } = useSelector((state) => state.message);

	const style = {
		border: "solid",
		padding: 10,
		borderWidth: 1,
	};
	return <>{display && <div style={style}> {message}</div>}</>;
};

export default Notification;
