import { useQueries } from "react-query";
import { fetchData } from "../axios/functions";
import requests from "../axios/requests";

export const useAllTMDBdata = () => {
	const queries = requests.map(({ queryKey, fetchUrl }) => {
		return {
			queryKey: queryKey,
			queryFn: () => fetchData(fetchUrl),
		};
	});

	return useQueries(queries);
};
