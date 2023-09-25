import React, { useContext, useEffect, useState } from "react";
import { MoviesContext } from "../context/MoviesContext";
import axios from "../axios/axios";
import slider_arrow_right from "../icons/slider_arrow_right.png";
import slider_arrow_left from "../icons/slider_arrow_left.png";

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
								className={`${
									isLargeRow
										? "standard_size_picture poster_large"
										: "standard_size_picture"
								}`}
								src={`${base_url}${
									isLargeRow ? movie.poster_path : movie.backdrop_path
								}`}
								alt={movie.name}
								key={movie.id}></img>
						)
				)}
				<div className='row_wrapper_left'>
					<img
						className='arrow_left'
						src={slider_arrow_left}
						alt='slider arrow'
					/>
				</div>
				<div className='row_wrapper_right'>
					<img
						className='arrow_right'
						src={slider_arrow_right}
						alt='slider arrow'
					/>
				</div>
			</div>
		</main>
	);
};

export default Row;
