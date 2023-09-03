import React from "react";

const Hero = () => {
	return (
		<div className='hero'>
			<div className='background_mask'></div>
			<div className='container'>
				<div className='hero_container'>
					<h2>
						The biggest local and international hits. The best stories. All
						streaming here.
					</h2>
					<p>Watch anywhere. Cancel anytime.</p>
					<div className='get_started_title'>
						<h3>
							Ready to watch? Enter your email to create or restart your
							membership.
						</h3>
						<div className='get_started_menu'>
							<input type='email' name='email' minLength='5' maxLength='50' placeholder="Email address" />
							<button>{"Get Started" + " >"}</button>
						</div>
					</div>
				</div>
			</div>
			<div className='spacing'></div>
		</div>
	);
};

export default Hero;
