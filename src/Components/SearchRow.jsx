import React, { useContext } from "react";
import { MoviesContext } from "../context/MoviesContext";

const SearchRow = () => {
	const { base_url, searchResults } = useContext(MoviesContext);
	return (
		<main className='row search_row'>
			<div className='posters'>
				{searchResults.map(
					(movie) =>
						movie.backdrop_path && (
							<img
								src={`${base_url}${movie.backdrop_path}`}
								alt={movie.name}
								key={movie.id}></img>
						)
				)}
			</div>
		</main>
	);
};

export default SearchRow;
