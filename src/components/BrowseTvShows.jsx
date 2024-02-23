import React, { useContext } from "react";
import Banner from "./Banner";
import Row from "./Row";
import requests from "../axios/requests";
import { SearchContext } from "../context/SearchContext";

const BrowseTvShows = () => {
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
						fetchUrl={requests.fetchNetflixOriginalsTv}
						queryId='NetflixOriginalsTV'
						isLargeRow
					/>
					<Row
						title='Top Rated'
						fetchUrl={requests.fetchTopRatedTv}
						queryId='TopRatedTV'
						isLargeRow
					/>
					<Row
						title='Action & Adventure'
						fetchUrl={requests.fetchActionAndAdventureTV}
						queryId='Action&AdventureTV'
					/>
					<Row
						title='Animation'
						fetchUrl={requests.fetchAnimationTV}
						queryId='AnimationTV'
					/>
					<Row
						title='Comedy'
						fetchUrl={requests.fetchComedyTV}
						queryId='ComedyTV'
					/>
					<Row
						title='Crime'
						fetchUrl={requests.fetchCrimeTV}
						queryId='CrimeTV'
					/>
					<Row
						title='Documentary'
						fetchUrl={requests.fetchDocumentaryTV}
						queryId='DocumentaryTV'
					/>
					<Row title='Kids' fetchUrl={requests.fetchKidsTV} queryId='KidsTV' />
					<Row title='News' fetchUrl={requests.fetchNewsTV} queryId='NewsTV' />
					<Row
						title='Western'
						fetchUrl={requests.fetchWesternTV}
						queryId='WesternTV'
					/>
				</>
			) : (
				<Row title='Search Results' />
			)}
		</>
	);
};

export default BrowseTvShows;
