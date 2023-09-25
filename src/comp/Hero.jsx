import React from "react";
import GetStarted from "./GetStarted";

const Hero = () => {
	return (
		<div className='hero'>
			<div className='background_mask'></div>
			<div className='container'>
				<div className='hero_container'>
					<h2>Unlimited movies, TV shows, and more</h2>
					<p>Watch anywhere. Cancel anytime.</p>
					<GetStarted />
				</div>
			</div>
			<div className='spacing'></div>
		</div>
	);
};

export default Hero;
