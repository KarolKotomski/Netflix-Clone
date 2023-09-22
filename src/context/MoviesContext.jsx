import React, { createContext, useState, useEffect } from "react";
import axios from "../axios/axios";
import Fuse from "fuse.js";


export const MoviesContext = createContext();

export const MoviesContextProvider = (props) => {
	const base_url = "https://image.tmdb.org/t/p/original/";

	const [movies, setMovies] = useState([]);
	const [fetchUrl, setFetchUrl] = useState("");

	useEffect(() => {
		async function fetchData() {
			if (fetchUrl) {
				const request = await axios.get(fetchUrl);
				setMovies(request.data.results);
				return request;
			}
		}
		fetchData();
	}, [fetchUrl]);

	// fuzzy searchbar functionality:

	const [query, setQuery] = useState("");
	const fuse = new Fuse(movies, {
		keys: ["title", "original_title", "original_name", "name"],
	});

	const results = fuse.search(query);
	const searchResults = results.map((result) => result.item);

	const handleSearch = (e) => setQuery(e.target.value);

	// gathered context values
	const contextValue = {
		base_url,
		movies,
		searchResults,
		query,
		handleSearch,
		setFetchUrl,
		fetchUrl,
	};

	return (
		<MoviesContext.Provider value={contextValue}>
			{props.children}
		</MoviesContext.Provider>
	);
};
