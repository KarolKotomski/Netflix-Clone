import React, { useContext } from "react";
import Banner from "./Banner";
import Row from "./Row";
import requests from "../axios/requests";
import { MoviesContext } from "../context/MoviesContext";

const BrowseHome = () => {
	const { query } = useContext(MoviesContext);
	return (
		<>
			{!query ? (
				<>
					<Banner fetchUrl={requests.fetchNetflixOriginalsTv} />
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
					<Row title='Action Movies' fetchUrl={requests.fetchActionMovies} />
					<Row title='Comedy TV Shows' fetchUrl={requests.fetchComedyTV} />
					<Row title='Documentaries' fetchUrl={requests.fetchDocumentaries} />
					<Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies} />
					<Row title='News TV Shows' fetchUrl={requests.fetchNewsTV} />
					<Row title='Romance Movies' fetchUrl={requests.fetchRomanceMovies} />
				</>
			) : (
				<Row title='Search Results' />
			)}
		</>
	);
};

export default BrowseHome;
