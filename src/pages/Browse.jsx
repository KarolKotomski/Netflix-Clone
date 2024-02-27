import React from "react";
import BrowseFooter from "../components/BrowseFooter";
import BrowseHeader from "../components/BrowseHeader";
import { Outlet } from "react-router-dom";
import { SearchContextProvider } from "../context/SearchContext";

const Browse = () => {
	return (
		<div className='browse'>
			<SearchContextProvider>
				<BrowseHeader />
				<main>
					<Outlet />
				</main>
			</SearchContextProvider>
			<BrowseFooter />
		</div>
	);
};

export default Browse;
