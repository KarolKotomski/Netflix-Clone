import React, { useEffect, useState } from "react";
import axios from "../axios/axios";

const HomeRow = ({ title, fetchUrl, isLargeRow = false }) => {
	const [movies, setMovies] = useState([]);

	const base_url = "https://image.tmdb.org/t/p/original/";

	useEffect(() => {
		async function fetchData() {
			const request = await axios.get(fetchUrl);
			setMovies(request.data.results);
			return request;
		}
		fetchData();
	}, [fetchUrl]);

	return (
		<main className='home_row'>
			<div className='title'>
				<h2>{title}</h2>
			</div>
			<div className='posters'>
				{movies.map((movie) => (
					<img
						className={`${isLargeRow && "poster_large"}`}
						src={`${base_url}${
							isLargeRow ? movie.poster_path : movie.backdrop_path
						}`}
						alt={movie.name}
						key={movie.id}></img>
				))}
			</div>
		</main>
	);
};

export default HomeRow;
