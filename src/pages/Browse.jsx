import React, { useContext } from "react";
import BrowseFooter from "../components/BrowseFooter";
import BrowseHeader from "../components/BrowseHeader";
import { Outlet } from "react-router-dom";
import { MoviesContext } from "../context/MoviesContext";
import SearchRow from "../components/SearchRow";

const Browse = () => {
	const { query } = useContext(MoviesContext);
	return (
		<div className='browse'>
			<BrowseHeader />
			{query && <SearchRow title='Search Results' />}
			<Outlet />
			<BrowseFooter />
		</div>
	);
};

export default Browse;
