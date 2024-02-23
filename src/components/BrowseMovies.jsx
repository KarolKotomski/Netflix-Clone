import React, { useContext } from "react";
import Banner from "./Banner";
import Row from "./Row";
import requests from "../axios/requests";
import { SearchContext } from "../context/SearchContext";

const BrowseMovies = () => {
	const { query } = useContext(SearchContext);

	const bannerContent = requests.find(
		({ queryKey }) => queryKey === "NetflixOriginalsMovies"
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
	const row4Content = requests.find(
		({ queryKey }) => queryKey === "ComedyMovies"
	);
	const row5Content = requests.find(
		({ queryKey }) => queryKey === "DocumentaryMovies"
	);
	const row6Content = requests.find(
		({ queryKey }) => queryKey === "HorrorMovies"
	);
	const row7Content = requests.find(
		({ queryKey }) => queryKey === "RomanceMovies"
	);
	const row8Content = requests.find(
		({ queryKey }) => queryKey === "ScienceFictionMovies"
	);
	const row9Content = requests.find(({ queryKey }) => queryKey === "WarMovies");

	return (
		<>
			{!query ? (
				<>
					<Banner content={bannerContent} />
					<Row title='NETFLIX ORIGINALS' isLargeRow content={row1Content} />
					<Row title='Top Rated' isLargeRow content={row2Content} />
					<Row title='Action' content={row3Content} />
					<Row title='Comedy' content={row4Content} />
					<Row title='Documentaries' content={row5Content} />
					<Row title='Horror' content={row6Content} />
					<Row title='Romance' content={row7Content} />
					<Row title='Science Fiction' content={row8Content} />
					<Row title='War' content={row9Content} />
				</>
			) : (
				<Row title='Search Results' />
			)}
		</>
	);
};

export default BrowseMovies;
