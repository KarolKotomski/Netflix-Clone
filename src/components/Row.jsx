import React, { useContext, useState, useRef } from "react";
import { SearchContext } from "../context/SearchContext";
import axios from "../axios/axios";
import slider_arrow_right from "../icons/slider_arrow_right.png";
import slider_arrow_left from "../icons/slider_arrow_left.png";
import { useQuery } from "react-query";

const Row = ({ title, fetchUrl, isLargeRow = false }) => {
	const [isMoved, setIsMoved] = useState(false);
	const { base_url, query, searchResults } = useContext(SearchContext);

	const { data, error } = useQuery(
		[title],
		() => {
			return axios.get(fetchUrl).then((res) => res.data.results);
		},
		{
			staleTime: 600000,
		}
	);

	error && console.error("error:", error.message);

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

	return (
		<section className={`row ${query && "row_search"}`}>
			<div className='title'>
				<h2>{title}</h2>
			</div>
			<div className='slider'>
				<div className='posters' ref={rowRef}>
					{(query ? searchResults : data)?.map(
						(movie, index) =>
							((isLargeRow && movie.poster_path) ||
								(!isLargeRow && movie.backdrop_path)) && (
								<div className='single_poster' key={index}>
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
									<h5 className='poster_title'>
										{!isLargeRow && (movie.title || movie.name)}
									</h5>
								</div>
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
		</section>
	);
};

export default Row;
