import React from "react";
import "../Styles/GetStarted.css";

const GetStarted = () => {
	return (
		<div className='get_started_title'>
			<h3>
				Ready to watch? Enter your email to create or restart your membership.
			</h3>
			<div className='get_started_menu'>
				<input
					type='email'
					name='email'
					minLength='5'
					maxLength='50'
					placeholder='Email address'
				/>
				<button>{"Get Started" + " >"}</button>
			</div>
		</div>
	);
};

export default GetStarted;
