import React from "react";
import logo from "../images/netflix_logo.png";
import { Link } from "react-router-dom";

const SignIn_Main = () => {
	return (
		<main className='signIn_main'>
			<div className='container'>
				<div className='signIn_main_container'>
					<Link to='/' onClick={() => window.scrollTo(0, 0)}>
						<img className='netflix_logo' src={logo} alt='netflix logo' />
					</Link>
					<div className='wrapper'>
						<h1>Sign In</h1>
						<input
							type='email'
							placeholder='Email or phone number'
							minLength={5}
							maxLength={60}
						/>
						<input
							type='password'
							placeholder='Password'
							minLength={5}
							maxLength={60}
						/>
						<Link to='/browse/home' onClick={() => window.scrollTo(0, 0)}>
							<button type='submit'>Sign In</button>
						</Link>
					</div>
				</div>
			</div>
		</main>
	);
};

export default SignIn_Main;
