import React, { useContext } from "react";
import Banner from "./Banner";
import Row from "./Row";
import requests from "../axios/requests";
import { SearchContext } from "../context/SearchContext";

const BrowseTvShows = () => {
	const { query } = useContext(SearchContext);

	const bannerContent = requests.find(
		({ queryKey }) => queryKey === "NetflixOriginalsTV"
	);
	const row1Content = requests.find(
		({ queryKey }) => queryKey === "NetflixOriginalsTV"
	);
	const row2Content = requests.find(
		({ queryKey }) => queryKey === "TopRatedTV"
	);
	const row3Content = requests.find(
		({ queryKey }) => queryKey === "Action&AdventureTV"
	);
	const row4Content = requests.find(
		({ queryKey }) => queryKey === "AnimationTV"
	);
	const row5Content = requests.find(({ queryKey }) => queryKey === "ComedyTV");
	const row6Content = requests.find(({ queryKey }) => queryKey === "CrimeTV");
	const row7Content = requests.find(
		({ queryKey }) => queryKey === "DocumentaryTV"
	);
	const row8Content = requests.find(({ queryKey }) => queryKey === "KidsTV");
	const row9Content = requests.find(({ queryKey }) => queryKey === "NewsTV");
	const row10Content = requests.find(
		({ queryKey }) => queryKey === "WesternTV"
	);

	return (
		<>
			{!query ? (
				<>
					<Banner content={bannerContent} />
					<Row title='NETFLIX ORIGINALS' isLargeRow content={row1Content} />
					<Row title='Top Rated' isLargeRow content={row2Content} />
					<Row title='Action & Adventure' content={row3Content} />
					<Row title='Animation' content={row4Content} />
					<Row title='Comedy' content={row5Content} />
					<Row title='Crime' content={row6Content} />
					<Row title='Documentary' content={row7Content} />
					<Row title='Kids' content={row8Content} />
					<Row title='News' content={row9Content} />
					<Row title='Western' content={row10Content} />
				</>
			) : (
				<Row title='Search Results' />
			)}
		</>
	);
};

export default BrowseTvShows;
