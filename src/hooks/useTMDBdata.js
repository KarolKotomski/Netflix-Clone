import { useQuery } from "react-query";
import { fetchData } from "../axios/functions";

export const useTMDBdata = (queryKey, fetchUrl) => {
	return useQuery({
		queryKey: queryKey,
		queryFn: () => fetchData(fetchUrl),
	});
};
