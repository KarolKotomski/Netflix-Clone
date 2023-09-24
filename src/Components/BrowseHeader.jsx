import React, { useEffect, useState, useContext } from "react";
import avatar from "../icons/avatar.jpg";
import bell from "../icons/bell.png";
import caret from "../icons/caret.png";
import close from "../icons/plus_icon.png";
import logo from "../images/netflix_logo.png";
import search from "../icons/search.png";
import { Link, NavLink } from "react-router-dom";
import DropdownMenu from "./DropdownMenu";
import { MoviesContext } from "../context/MoviesContext";

const BrowseHeader = () => {
	const { query, setQuery, handleSearch } = useContext(MoviesContext);
	const [show, handleShow] = useState(false);
	const [isActive, setIsActive] = useState(false);

	const handleClick = () => {
		window.scrollTo(0, 0);
		setQuery("");
	};

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
						<Link to='home' onClick={() => handleClick()}>
							<img src={logo} alt='netflix logo' />
						</Link>
						<div className='list'>
							<ul>
								<NavLink to='home' onClick={() => handleClick()}>
									<li>Home</li>
								</NavLink>
								<NavLink to='tvshows' onClick={() => handleClick()}>
									<li>TV Shows</li>
								</NavLink>
								<NavLink to='movies' onClick={() => handleClick()}>
									<li>Movies</li>
								</NavLink>
							</ul>
						</div>
					</div>
					<div className='user_panel'>
						<div className='search'>
							<div className='search_bar'>
								<div className='search_bar_wrapper_icon'>
									<img src={search} alt='search' />
								</div>
								<div className='search_bar_wrapper_input_field'>
									<input type='text' value={query} onChange={handleSearch} />
								</div>
								<div className="search_bar_wrapper_close">
								<img src={close} alt='search' />
								</div>
							</div>
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
