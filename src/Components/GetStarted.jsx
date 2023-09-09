import React from "react";
import gs_arrow from "../icons/gs_arrow.png";

const GetStarted = () => {
	return (
		<div className='get_started'>
			<div className='container'>
				<div className='get_started_container'>
					<div className='title'>
						<h3>
							Ready to watch? Enter your email to create or restart your
							membership.
						</h3>
						<div className='main'>
							<input
								type='email'
								name='email'
								minLength='5'
								maxLength='50'
								placeholder='Email address'
							/>
							<button>
								Get Started
								<img className='gs_arrow' src={gs_arrow} alt='arrow sign' />
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default GetStarted;
