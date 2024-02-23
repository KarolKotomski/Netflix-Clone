import React, { useContext } from "react";
import Banner from "./Banner";
import Row from "./Row";
import requests from "../axios/requests";
import { SearchContext } from "../context/SearchContext";

const BrowseMovies = () => {
	const { query } = useContext(SearchContext);
	return (
		<>
			{!query ? (
				<>
					<Banner
						fetchUrl={requests.fetchNetflixOriginals}
						queryId='NetflixOriginalsMovies'
					/>
					<Row
						title='NETFLIX ORIGINALS'
						fetchUrl={requests.fetchNetflixOriginals}
						queryId='NetflixOriginalsMovies'
						isLargeRow
					/>
					<Row
						title='Top Rated'
						fetchUrl={requests.fetchTopRatedMovie}
						queryId='TopRatedMovies'
						isLargeRow
					/>
					<Row
						title='Action'
						fetchUrl={requests.fetchActionMovies}
						queryId='ActionMovies'
					/>
					<Row
						title='Comedy'
						fetchUrl={requests.fetchComedyMovies}
						queryId='ComedyMovies'
					/>
					<Row
						title='Documentaries'
						fetchUrl={requests.fetchDocumentaries}
						queryId='DocumentaryMovies'
					/>
					<Row
						title='Horror'
						fetchUrl={requests.fetchHorrorMovies}
						queryId='HorrorMovies'
					/>
					<Row
						title='Romance'
						fetchUrl={requests.fetchRomanceMovies}
						queryId='RomanceMovies'
					/>
					<Row
						title='Science Fiction'
						fetchUrl={requests.fetchScienceFictionMovies}
						queryId='ScienceFictionMovies'
					/>
					<Row
						title='War'
						fetchUrl={requests.fetchWarMovie}
						queryId='WarMovies'
					/>
				</>
			) : (
				<Row title='Search Results' />
			)}
		</>
	);
};

export default BrowseMovies;
