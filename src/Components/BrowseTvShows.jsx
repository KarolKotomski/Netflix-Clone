import React, { useContext } from "react";
import Banner from "./Banner";
import Row from "./Row";
import requests from "../axios/requests";
import { MoviesContext } from "../context/MoviesContext";

const BrowseTvShows = () => {
	const { query } = useContext(MoviesContext);
	return (
		<>
			{!query && (
				<>
					<Banner fetchUrl={requests.fetchNetflixOriginalsTv} />
					<Row
						title='NETFLIX ORIGINALS'
						fetchUrl={requests.fetchNetflixOriginalsTv}
						isLargeRow
					/>
					<Row
						title='Top Rated'
						fetchUrl={requests.fetchTopRatedTv}
						isLargeRow
					/>
					<Row
						title='Action & Adventure'
						fetchUrl={requests.fetchActionAndAdventureTV}
					/>
					<Row title='Animation' fetchUrl={requests.fetchAnimationTV} />
					<Row title='Comedy' fetchUrl={requests.fetchComedyTV} />
					<Row title='Crime' fetchUrl={requests.fetchCrimeTV} />
					<Row title='Documentary' fetchUrl={requests.fetchDocumentaryTV} />
					<Row title='Kids' fetchUrl={requests.fetchKidsTV} />
					<Row title='News' fetchUrl={requests.fetchNewsTV} />
					<Row title='Western' fetchUrl={requests.fetchWesternTV} />
				</>
			)}
		</>
	);
};

export default BrowseTvShows;
