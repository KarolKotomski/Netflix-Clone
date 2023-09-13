import React from "react";
import Banner from "./Banner";
import Row from "./Row";
import requests from "../axios/requests";

const BrowseMovies = () => {
	return (
		<>
			<Banner />
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
			<Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies} />
			<Row title='Documentaries' fetchUrl={requests.fetchDocumentaries} />
			<Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies} />
			<Row title='Romance Movies' fetchUrl={requests.fetchRomanceMovies} />
			<Row
				title='Science Fiction Movies'
				fetchUrl={requests.fetchScienceFictionMovies}
			/>
			<Row title='War Movies' fetchUrl={requests.fetchWarMovie} />
		</>
	);
};

export default BrowseMovies;
