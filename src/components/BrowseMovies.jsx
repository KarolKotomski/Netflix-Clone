import React, { useContext } from "react";
import Banner from "./Banner";
import Row from "./Row";
import requests from "../axios/requests";
import { MoviesContext } from "../context/MoviesContext";

const BrowseMovies = () => {
	const { query } = useContext(MoviesContext);
	return (
		<>
			{!query ? (
				<>
					<Banner fetchUrl={requests.fetchNetflixOriginals} />
					<Row
						title='NETFLIX ORIGINALS'
						fetchUrl={requests.fetchNetflixOriginals}
						isLargeRow
					/>
					<Row
						title='Top Rated'
						fetchUrl={requests.fetchTopRatedMovie}
						isLargeRow
					/>
					<Row title='Action' fetchUrl={requests.fetchActionMovies} />
					<Row title='Comedy' fetchUrl={requests.fetchComedyMovies} />
					<Row title='Documentaries' fetchUrl={requests.fetchDocumentaries} />
					<Row title='Horror' fetchUrl={requests.fetchHorrorMovies} />
					<Row title='Romance' fetchUrl={requests.fetchRomanceMovies} />
					<Row
						title='Science Fiction'
						fetchUrl={requests.fetchScienceFictionMovies}
					/>
					<Row title='War' fetchUrl={requests.fetchWarMovie} />
				</>
			) : (
				<Row title='Search Results' />
			)}
		</>
	);
};

export default BrowseMovies;
