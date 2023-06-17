import axios from "axios";

const API_URL = process.env.REACT_APP_API;

const getAll = async () => {
	const getData = await axios.get(API_URL);
	const data = await getData.data;
	return data;
};

const createNew = async (data) => {
	const sendNewData = await axios.post(API_URL, { content: data, votes: 0 });
	const savedData = await sendNewData.data;
	return savedData;
};

const updateVote = async (data) => {
	const dataToUpdate = await axios.put(`${API_URL}/${data.id}`, data);
	const updatedData = await dataToUpdate.data;
	return updatedData;
};

//eslint-disable-next-line
export default { getAll, createNew, updateVote };
