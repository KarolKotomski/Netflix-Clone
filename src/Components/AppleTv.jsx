import React from "react";
import appleTv from "../images/apple-tv.png";

const AppleTv = () => {
	return (
		<div className='appleTv'>
			<div className='container'>
				<div className='appleTv_container'>
					<div className='text'>
						<h2>Enjoy on your TV</h2>
						<p>
							Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
							Blu-ray players, and more.
						</p>
					</div>
					<div className='screen'>
						<img
							src={appleTv}
							alt='apple tv standing on the table and showing different movies'
						/>
					</div>
				</div>
			</div>
			<div className='spacing'></div>
		</div>
	);
};

export default AppleTv;
