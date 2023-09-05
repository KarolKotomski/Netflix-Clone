import React from "react";
import logo from "../images/netflix_logo.png";
import SignInButton from "./SignInButton";

const Header = () => {
	return (
		<header className='header'>
			<div className='container'>
				<div className='header_container'>
					<img src={logo} alt='netflix logo' />
					<SignInButton />
				</div>
			</div>
		</header>
	);
};

export default Header;
