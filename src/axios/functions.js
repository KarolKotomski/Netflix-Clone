import axios from "../axios/axios";

export const fetchData = (fetchUrl) => {
	return axios.get(fetchUrl).then((res) => res.data.results);
};
