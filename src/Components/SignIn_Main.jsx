import React from "react";
import logo from "../images/netflix_logo.png";

const SignIn_Main = () => {
	return (
		<main className='signIn_main'>
			<div className='container'>
                <div className='signIn_main_container'>
                <img className="netflix_logo" src={logo} alt='netflix logo' />
                    <div className="wrapper">
                        <h1>Sign In</h1>
                        <input type="email" name="" id="" placeholder="Email or phone number"/>
                        <input type="password" name="" id="" placeholder="Password" minLength="4" maxLength="60"/>
                        <button type="submit">Sign In</button>
                        <div className="newTo">
                            <p>New to Netflix? <span>Sign up now</span>.</p>
                        </div> 
                    </div>
                </div>
			</div>
		</main>
	);
};

export default SignIn_Main;
