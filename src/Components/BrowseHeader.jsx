import React, { useEffect, useState, useContext, useRef } from "react";
import avatar from "../icons/avatar.jpg";
import bell from "../icons/bell.png";
import caret from "../icons/caret.png";
import close from "../icons/plus_icon.png";
import logo from "../images/netflix_logo.png";
import search from "../icons/search.png";
import { Link, NavLink } from "react-router-dom";
import DropdownMenu from "./DropdownMenu";
import DropdownNotifications from "./DropdownNotifications";
import { MoviesContext } from "../context/MoviesContext";

const BrowseHeader = () => {
	const { query, setQuery, handleSearch } = useContext(MoviesContext);
	const [show, handleShow] = useState(false);
	const [isDropActive, setIsDropActive] = useState(false);
	const [isDropNotifActive, setIsDropNotifActive] = useState(false);
	const [isSearchActive, setIsSearchActive] = useState(false);

	const searchInputRef = useRef(null);
	const searchInputField = useRef(null);

	const handleClick = () => {
		window.scrollTo(0, 0);
		setQuery("");
	};

	// Search Menu:
	const handleOpenSearch = () => {
		setIsSearchActive(true);
		searchInputField.current.focus();
	};

	const handleCloseSearch = () => {
		setIsSearchActive(false);
	};

	// Dropdown Menu:
	const handleOpenDrop = () => {
		setIsDropActive(true);
	};

	const handleCloseDrop = () => {
		setIsDropActive(false);
	};

	// DropdownNotifications Menu:
	const handleOpenDropNotif = () => {
		setIsDropNotifActive(true);
	};

	const handleCloseDropNotif = () => {
		setIsDropNotifActive(false);
	};

	// Transition Header:
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

	// When clicked outside the input:
	const handleOutsideClick = (e) => {
		if (searchInputRef.current && !searchInputRef.current.contains(e.target)) {
			handleCloseSearch();
		}
	};

	useEffect(() => {
		document.addEventListener("mousedown", handleOutsideClick);

		return () => {
			document.removeEventListener("mousedown", handleOutsideClick);
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
						<div
							className={isSearchActive ? "search_bar open" : "search_bar"}
							ref={searchInputRef}>
							<div className='search_bar_wrapper_icon'>
								<img src={search} alt='search' />
							</div>
							<div className='search_bar_wrapper_input_field'>
								<input
									type='text'
									value={query}
									onChange={handleSearch}
									placeholder='Type your title'
									ref={searchInputField}
									maxLength={15}
									name='search'
								/>
							</div>
							<div
								className='search_bar_wrapper_close'
								onClick={() => setQuery("")}>
								<img
									className={query ? "visible" : "invisible"}
									src={close}
									alt='search'
								/>
							</div>
						</div>
						{!isSearchActive && (
							<div className='search' onClick={() => handleOpenSearch()}>
								<img src={search} alt='search' />
							</div>
						)}
						<div
							className='bell'
							onMouseOver={() => handleOpenDropNotif()}
							onMouseLeave={() => handleCloseDropNotif()}>
							<img src={bell} alt='notifications bell' />
							<div className={`arrow ${isDropNotifActive && "open"}`}>
								<img src={caret} alt='caret icon'></img>
							</div>
							{isDropNotifActive && <DropdownNotifications />}
						</div>
						<div
							className='profile'
							onMouseOver={() => handleOpenDrop()}
							onMouseLeave={() => handleCloseDrop()}>
							<div className='avatar'>
								<img src={avatar} alt='profile icon' />
								<div className={`arrow ${isDropActive && "open"}`}>
									<img src={caret} alt='caret icon'></img>
								</div>
							</div>
							<div className='caret'>
								<img src={caret} alt='caret icon' />
							</div>
							{isDropActive && <DropdownMenu />}
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default BrowseHeader;
