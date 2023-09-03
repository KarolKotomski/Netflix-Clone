import React from "react";
import "../Styles/Hero.css";
import GetStarted from "./GetStarted";

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
					<GetStarted />
				</div>
			</div>
			<div className='spacing'></div>
		</div>
	);
};

export default Hero;
