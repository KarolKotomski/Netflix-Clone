import React, { createContext, useEffect, useState } from "react";
import Fuse from "fuse.js";

export const SearchContext = createContext();

export const SearchContextProvider = ({ children }) => {
	const base_url = "https://image.tmdb.org/t/p/original/";

	// fuzzy searchbar functionality:

	const [query, setQuery] = useState("");
	const [searchResults, setSearchResults] = useState([]);
	const [allData, setAllData] = useState([]);

	useEffect(() => {
		if (allData) {
			const fuse = new Fuse(allData, {
				keys: ["title", "original_title", "original_name", "name"],
			});
			const results = fuse.search(query);
			const formattedResults = results.map((result) => result.item);
			setSearchResults(formattedResults);
		}
	}, [query, allData]);

	const handleSearch = (e) => setQuery(e.target.value);

	// gathered context values
	const contextValue = {
		allData,
		setAllData,
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
