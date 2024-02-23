import axios from "../axios/axios";
import { useQuery } from "react-query";

export const useTMDBdata = (queryKey, fetchUrl) => {
	const fetchData = () => {
		return axios.get(fetchUrl).then((res) => res.data.results);
	};

	return useQuery(queryKey, fetchData, {
		staleTime: Infinity,
	});
};
