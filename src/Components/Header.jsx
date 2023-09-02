import React from "react";
import "../Styles/Header.css";
import logo from "../images/netflix_logo.png";

const Header = () => {
	return (
		<div className='header'>
			<div className='container'>
				<div className='header-container'>
					<img src={logo} alt='netflix logo' />
					<button>Sign In</button>
				</div>
			</div>
		</div>
	);
};

export default Header;
