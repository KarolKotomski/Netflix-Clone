import React, { useEffect, useState } from "react";
import logo from "../images/netflix_logo.png";
import avatar from "../icons/avatar.jpg";
import bell from "../icons/bell.png";
import search from "../icons/search.png";

const HomeHeader = () => {
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
		<header className={`home_header ${show && "black_background"}`}>
			<div className="container_long">
				<div className='home_header_container_long'>
					<div className='bar'>
						<img src={logo} alt='netflix logo' />
						<div className='list'>
							<ul>
								<li>Home</li>
								<li>TV Shows</li>
								<li>Movies</li>
								<li>New & Popular</li>
								<li>My List</li>
							</ul>
						</div>
					</div>
					<div className='user_panel'>
						<img src={search} alt='search' />
						<img src={bell} alt='notifications bell' />
						<img className='avatar' src={avatar} alt='profile icon' />
					</div>
				</div>
			</div>
		</header>
	);
};

export default HomeHeader;
