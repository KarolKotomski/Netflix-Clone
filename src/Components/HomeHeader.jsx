import React from "react";
import logo from "../images/netflix_logo.png";
import avatar from "../icons/avatar.jpg";
import bell from "../icons/bell.png";
import search from "../icons/search.png";

const Home_Header = () => {
	return (
		<header className='home_header'>
			<div className='container_long'>
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
						<img className="avatar" src={avatar} alt='profile icon' />
					</div>
				</div>
			</div>
		</header>
	);
};

export default Home_Header;
