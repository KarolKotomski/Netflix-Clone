import React, { createContext, useEffect, useState } from "react";
import axios from "../axios/axios";
import Fuse from "fuse.js";
import requests from "../axios/requests";
import { useQuery } from "react-query";

export const SearchContext = createContext();

export const SearchContextProvider = ({ children }) => {
	const base_url = "https://image.tmdb.org/t/p/original/";

	// fetching all data from TMDB:

	const { data, error } = useQuery(
		"all",
		async () => {
			const endpoints = Object.values(requests).map((url) =>
				axios.get(url).then((response) => response.data.results)
			);
			const responses = await Promise.all(endpoints);
			const mergedData = responses.flat();
			const uniqueData = mergedData.filter(
				(item, index, self) => index === self.findIndex((t) => t.id === item.id)
			);
			return uniqueData;
		},
		{
			staleTime: 300000,
		}
	);

	error && console.error("error:", error.message);

	// fuzzy searchbar functionality:

	const [query, setQuery] = useState("");
	const [searchResults, setSearchResults] = useState([]);

	useEffect(() => {
		if (data) {
			const fuse = new Fuse(data, {
				keys: ["title", "original_title", "original_name", "name"],
			});
			const results = fuse.search(query);
			const formattedResults = results.map((result) => result.item);
			setSearchResults(formattedResults);
		}
	}, [data, query]);

	const handleSearch = (e) => setQuery(e.target.value);

	// gathered context values
	const contextValue = {
		base_url,
		searchResults,
		query,
		setQuery,
		handleSearch,
	};

	return (
		<SearchContext.Provider value={contextValue}>
			{children}
		</SearchContext.Provider>
	);
};
