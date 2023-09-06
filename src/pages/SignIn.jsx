import React from "react";
import Header from "../components/Header";
import SignIn_Main from "../components/SignIn_Main";
import SignIn_Footer from "../components/SignIn_Footer";

const SignIn = () => {
	return (
		<div className='sign_in'>
			<SignIn_Main />
			<SignIn_Footer />
		</div>
	);
};

export default SignIn;
