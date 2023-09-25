import React, { useContext, useEffect, useState, useRef } from "react";
import { MoviesContext } from "../context/MoviesContext";
import axios from "../axios/axios";
import slider_arrow_right from "../icons/slider_arrow_right.png";
import slider_arrow_left from "../icons/slider_arrow_left.png";

const Row = ({ title, fetchUrl, isLargeRow = false }) => {
	const { base_url, query, searchResults } = useContext(MoviesContext);

	const [movies, setMovies] = useState([]);
	const [isMoved, setIsMoved] = useState(false);

	const rowRef = useRef(null);

	const handleClick = (direction) => {
		setIsMoved(true);
		if (rowRef.current) {
			const { scrollLeft, clientWidth } = rowRef.current;

			const scrollTo =
				direction === "left"
					? scrollLeft - clientWidth
					: scrollLeft + clientWidth;

			rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });

			if (scrollTo <= 0) {
				setIsMoved(false);
			}
		}
	};

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
		<main className={`row ${query && "row_search"}`}>
			<div className='title'>
				<h2>{title}</h2>
			</div>
			<div className='slider'>
				<div className='posters' ref={rowRef}>
					{(query ? searchResults : movies).map(
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
				</div>
				{isMoved && (
					<div
						className='slider_wrapper_left'
						onClick={() => handleClick("left")}>
						<img
							className='arrow_left'
							src={slider_arrow_left}
							alt='slider left arrow'
						/>
					</div>
				)}
				<div
					className='slider_wrapper_right'
					onClick={() => handleClick("right")}>
					<img
						className='arrow_right'
						src={slider_arrow_right}
						alt='slider right arrow'
					/>
				</div>
			</div>
		</main>
	);
};

export default Row;
