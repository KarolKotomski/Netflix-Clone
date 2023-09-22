import React, { useContext, useEffect, useState } from "react";
import { MoviesContext } from "../context/MoviesContext";
import axios from "../axios/axios";

const Row = ({ title, fetchUrl, isLargeRow = false }) => {
	const { base_url } = useContext(MoviesContext);

	const [movies, setMovies] = useState([]);

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

	return (
		<main className='row'>
			<div className='title'>
				<h2>{title}</h2>
			</div>
			<div className='posters'>
				{movies.map(
					(movie) =>
						((isLargeRow && movie.poster_path) ||
							(!isLargeRow && movie.backdrop_path)) && (
							<img
								className={`${isLargeRow && "poster_large"}`}
								src={`${base_url}${
									isLargeRow ? movie.poster_path : movie.backdrop_path
								}`}
								alt={movie.name}
								key={movie.id}></img>
						)
				)}
			</div>
		</main>
	);
};

export default Row;
