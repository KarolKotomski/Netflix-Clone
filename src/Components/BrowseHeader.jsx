import React, { useEffect, useState, useContext } from "react";
import avatar from "../icons/avatar.jpg";
import bell from "../icons/bell.png";
import caret from "../icons/caret.png";
import logo from "../images/netflix_logo.png";
import search from "../icons/search.png";
import { Link, NavLink } from "react-router-dom";
import DropdownMenu from "./DropdownMenu";
import { MoviesContext } from "../context/MoviesContext";


const BrowseHeader = () => {
	const { query, handleSearch } = useContext(MoviesContext);

	const [show, handleShow] = useState(false);
	const [isActive, setIsActive] = useState(false);

	const handleOpenMenu = () => {
		setIsActive(true);
	};

	const handleCloseMenu = () => {
		setIsActive(false);
	};

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
						<div className='search'>
							<input type='text' value={query} onChange={handleSearch}/>
							<img src={search} alt='search' />
						</div>
						<div className='bell'>
							<img src={bell} alt='notifications bell' />
						</div>
						<div
							className='profile'
							onMouseOver={() => handleOpenMenu()}
							onMouseLeave={() => handleCloseMenu()}>
							<div className='avatar'>
								<img src={avatar} alt='profile icon' />
								<div className={`arrow ${isActive && "open"}`}>
									<img src={caret} alt='caret icon'></img>
								</div>
							</div>
							<div className='caret'>
								<img src={caret} alt='caret icon' />
							</div>
							{isActive && <DropdownMenu />}
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default BrowseHeader;
