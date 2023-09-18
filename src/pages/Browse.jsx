import React from "react";
import BrowseFooter from "../components/BrowseFooter";
import BrowseHeader from "../components/BrowseHeader";
import { Outlet } from "react-router-dom";

const Browse = () => {
	return (
		<div className='browse'>
			<BrowseHeader />
			<Outlet />
			{/* <BrowseFooter /> */}
		</div>
	);
};

export default Browse;
