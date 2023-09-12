import React from "react";
import logo from "../images/netflix_logo.png";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<header className='header'>
			<div className='container'>
				<div className='header_container'>
					<Link to='/' onClick={() => window.scrollTo(0, 0)}>
						;
						<img src={logo} alt='netflix logo' />
					</Link>
					<Link to='/signin' onClick={() => window.scrollTo(0, 0)}>
						<button>Sign In</button>
					</Link>
				</div>
			</div>
		</header>
	);
};

export default Header;
