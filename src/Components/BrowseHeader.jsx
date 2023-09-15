import React, { useEffect, useState } from "react";
import avatar from "../icons/avatar.jpg";
import bell from "../icons/bell.png";
import caret from "../icons/caret.png";
import logo from "../images/netflix_logo.png";
import search from "../icons/search.png";
import { Link, NavLink } from "react-router-dom";
import DropdownMenu from "./DropdownMenu";

const BrowseHeader = () => {
	const [show, handleShow] = useState(false);

	const transitionHeader = () => {
		if (window.scrollY > 100) {
			handleShow(true);
		} else {
			handleShow(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", transitionHeader);
		return () => {
			window.removeEventListener("scroll", transitionHeader);
		};
	}, []);

	return (
		<header className={`browse_header ${show && "black_background"}`}>
			<div className='container_long'>
				<div className='browse_header_container_long'>
					<div className='bar'>
						<Link to='home' onClick={() => window.scrollTo(0, 0)}>
							<img src={logo} alt='netflix logo' />
						</Link>
						<div className='list'>
							<ul>
								<NavLink to='home' onClick={() => window.scrollTo(0, 0)}>
									<li>Home</li>
								</NavLink>
								<NavLink to='tvshows' onClick={() => window.scrollTo(0, 0)}>
									<li>TV Shows</li>
								</NavLink>
								<NavLink to='movies' onClick={() => window.scrollTo(0, 0)}>
									<li>Movies</li>
								</NavLink>
							</ul>
						</div>
					</div>
					<div className='user_panel'>
						<img src={search} alt='search' />
						<img src={bell} alt='notifications bell' />
						<div className='profile'>
							<div className='avatar'>
								<img src={avatar} alt='profile icon' />
							</div>
							<div className='caret'>
								<img src={caret} alt='caret icon' />
							</div>
							<DropdownMenu/>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default BrowseHeader;
