import React from "react";
import tv from "../images/tv.png";

const Tv = () => {
	return (
		<div className='tv'>
			<div className='container'>
				<div className='tv_container'>
					<div className='text'>
						<h2>Enjoy on your TV</h2>
						<p>
							Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
							Blu-ray players, and more.
						</p>
					</div>
					<div className='screen'>
						<img
							src={tv}
							alt='tv standing on the table and showing different movies'
						/>
					</div>
				</div>
			</div>
			<div className='spacing'></div>
		</div>
	);
};

export default Tv;
