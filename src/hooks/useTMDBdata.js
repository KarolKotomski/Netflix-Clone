import { useQuery } from "react-query";
import { fetchData } from "../axios/functions";

export const useTMDBdata = (queryKey, fetchUrl) => {
	return useQuery(queryKey, () => fetchData(fetchUrl), {
		staleTime: Infinity,
	});
};
