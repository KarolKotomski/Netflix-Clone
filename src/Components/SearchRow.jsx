import React, { useContext } from "react";
import { MoviesContext } from "../context/MoviesContext";

const SearchRow = ({ title }) => {
	const { base_url, searchResults } = useContext(MoviesContext);

	return (
        <main className='row search_row'>
            <div className='title'>
				<h2>{title}</h2>
			</div>
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
