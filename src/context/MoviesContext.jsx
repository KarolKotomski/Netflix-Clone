import React, { createContext, useState, useEffect } from "react";
import axios from "../axios/axios";
import requests from "../axios/requests";
import Fuse from "fuse.js";

export const MoviesContext = createContext();

export const MoviesContextProvider = (props) => {
	const [movies, setMovies] = useState([]);

	const base_url = "https://image.tmdb.org/t/p/original/";

	useEffect(() => {
		async function fetchData() {
			const request = await axios.get(requests.fetchNetflixOriginals);
			setMovies(request.data.results);
			return request;
		}
		fetchData();
    }, [requests.fetchNetflixOriginals]);

	//fuzzy searchbar functionality:

	const [query, setQuery] = useState("");
	const fuse = new Fuse(movies, {
		keys: ["title", "original_title"],
	});

	const results = fuse.search(query);
	const searchResults = results.map((result) => result.item);

	const handleSearch = (e) => setQuery(e.target.value);

	// gathered context values
	const contextValue = {
		movies,
		base_url,
		searchResults,
		query,
		handleSearch,
	};

	return (
		<MoviesContext.Provider value={contextValue}>
			{props.children}
		</MoviesContext.Provider>
	);
};
