import React, { createContext, useState, useEffect } from "react";
import axios from "../axios/axios";
import Fuse from "fuse.js";
import requests from "../axios/requests";

export const MoviesContext = createContext();

export const MoviesContextProvider = (props) => {
	const base_url = "https://image.tmdb.org/t/p/original/";

	const [allMovies, setAllMovies] = useState([]);


	useEffect(() => {
		async function fetchAllData() {
			const endpoints = Object.values(requests).map((url) =>
				axios.get(url).then((response) => response.data.results)
			);
			try {
				const responses = (await Promise.all(endpoints)).flat(Infinity);
				const uniqueMoviesArray = responses.filter(
					(item, index, self) =>
						index === self.findIndex((t) => t.id === item.id)
				);
				setAllMovies(uniqueMoviesArray);
			} catch (error) {
				console.error("Error during fetching the data", error);
			}
		}
		fetchAllData();
	}, []);

	useEffect(() => {
		console.log(allMovies);
	}, [allMovies]);

	// fuzzy searchbar functionality:

	const [query, setQuery] = useState("");
	const fuse = new Fuse(allMovies, {
		keys: ["title", "original_title", "original_name", "name"],
	});

	const results = fuse.search(query);
	const searchResults = results.map((result) => result.item);

	const handleSearch = (e) => setQuery(e.target.value);

	// gathered context values
	const contextValue = {
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
