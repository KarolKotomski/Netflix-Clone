import React from "react";
import Banner from "./Banner";
import Row from "./Row";
import requests from "../axios/requests";


const BrowseHome = () => {
	return (
		<>
			<Banner fetchUrl={requests.fetchNetflixOriginalsTv}/>
			<Row
				title='NETFLIX ORIGINALS'
				fetchUrl={requests.fetchNetflixOriginals}
				isLargeRow
			/>
			<Row title='Top Rated' fetchUrl={requests.fetchTopRatedMovie} isLargeRow />
			<Row title='Action Movies' fetchUrl={requests.fetchActionMovies} />
			<Row title='Comedy TV Shows' fetchUrl={requests.fetchComedyTV} />
			<Row title='Documentaries' fetchUrl={requests.fetchDocumentaries} />
			<Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies} />
			<Row title='News TV Shows' fetchUrl={requests.fetchNewsTV} />
			<Row title='Romance Movies' fetchUrl={requests.fetchRomanceMovies} />
		</>
	);
};

export default BrowseHome;