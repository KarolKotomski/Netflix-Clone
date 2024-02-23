import axios from "../axios/axios";
import { useQuery } from "react-query";

export const useTMDBdata = (fetchUrl, queryId) => {
	const fetchData = () => {
		return axios.get(fetchUrl).then((res) => res.data.results);
	};

	return useQuery(queryId, fetchData, {
		staleTime: 600000,
	});
};
