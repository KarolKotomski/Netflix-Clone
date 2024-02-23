import React, { useContext } from "react";
import Banner from "./Banner";
import Row from "./Row";
import requests from "../axios/requests";
import { SearchContext } from "../context/SearchContext";

const BrowseHome = () => {
	const { query } = useContext(SearchContext);

	const bannerContent = requests.find(
		({ queryKey }) => queryKey === "NetflixOriginalsTV"
	);
	const row1Content = requests.find(
		({ queryKey }) => queryKey === "NetflixOriginalsMovies"
	);
	const row2Content = requests.find(
		({ queryKey }) => queryKey === "TopRatedMovies"
	);
	const row3Content = requests.find(
		({ queryKey }) => queryKey === "ActionMovies"
	);
	const row4Content = requests.find(({ queryKey }) => queryKey === "ComedyTV");
	const row5Content = requests.find(
		({ queryKey }) => queryKey === "DocumentaryMovies"
	);
	const row6Content = requests.find(
		({ queryKey }) => queryKey === "HorrorMovies"
	);
	const row7Content = requests.find(({ queryKey }) => queryKey === "NewsTV");
	const row8Content = requests.find(
		({ queryKey }) => queryKey === "RomanceMovies"
	);

	return (
		<>
			{!query ? (
				<>
					<Banner content={bannerContent} />
					<Row title='NETFLIX ORIGINALS' content={row1Content} isLargeRow />
					<Row title='Top Rated' content={row2Content} isLargeRow />
					<Row title='Action Movies' content={row3Content} />
					<Row title='Comedy TV Shows' content={row4Content} />
					<Row title='Documentaries' content={row5Content} />
					<Row title='Horror Movies' content={row6Content} />
					<Row title='News TV Shows' content={row7Content} />
					<Row title='Romance Movies' content={row8Content} />
				</>
			) : (
				<Row title='Search Results' />
			)}
		</>
	);
};

export default BrowseHome;
