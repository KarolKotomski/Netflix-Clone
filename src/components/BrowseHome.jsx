import React, { useContext } from "react";
import Banner from "./Banner";
import Row from "./Row";
import requests from "../axios/requests";
import { SearchContext } from "../context/SearchContext";

const BrowseHome = () => {
	const { query } = useContext(SearchContext);
	return (
		<>
			{!query ? (
				<>
					<Banner
						fetchUrl={requests.fetchNetflixOriginalsTv}
						queryId='NetflixOriginalsTV'
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
						title='Action Movies'
						fetchUrl={requests.fetchActionMovies}
						queryId='ActionMovies'
					/>
					<Row
						title='Comedy TV Shows'
						fetchUrl={requests.fetchComedyTV}
						queryId='ComedyTV'
					/>
					<Row
						title='Documentaries'
						fetchUrl={requests.fetchDocumentaries}
						queryId='DocumentaryMovies'
					/>
					<Row
						title='Horror Movies'
						fetchUrl={requests.fetchHorrorMovies}
						queryId='HorrorMovies'
					/>
					<Row
						title='News TV Shows'
						fetchUrl={requests.fetchNewsTV}
						queryId='NewsTV'
					/>
					<Row
						title='Romance Movies'
						fetchUrl={requests.fetchRomanceMovies}
						queryId='RomanceMovies'
					/>
				</>
			) : (
				<Row title='Search Results' />
			)}
		</>
	);
};

export default BrowseHome;
