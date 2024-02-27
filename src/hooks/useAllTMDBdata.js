import { useQueries } from "react-query";
import { fetchData } from "../axios/functions";
import requests from "../axios/requests";
import { useEffect, useState } from "react";

export const useAllTMDBdata = (isSearchActive) => {
	const [allQueries, setAllQueries] = useState([]);

	useEffect(() => {
		if (isSearchActive) {
			const queries = requests.map((request) => {
				return {
					queryKey: request.queryKey,
					queryFn: () => fetchData(request.fetchUrl),
					staleTime: Infinity,
				};
			});
			setAllQueries(queries);
		}
	}, [isSearchActive]);

	return useQueries(allQueries);
};
