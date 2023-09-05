import React from "react";

import appleTv from "../images/apple-tv.png";
import apple_tv_video from "../videos/apple-video.m4v";

const AppleTv = () => {
	return (
		<div className='appleTv'>
			<div className='container'>
				<div className='appleTv_container'>
					<div className='text'>
						<h2>Watch everywhere</h2>
						<p>
							Stream unlimited movies and TV shows on your phone, tablet,
							laptop, and TV.
						</p>
					</div>
					<div className='screen'>
						<div className='wrapper'>
							<img
								src={appleTv}
								alt='apple tv standing on the table and showing different movies'
							/>
							<video
								src={apple_tv_video}
								autoPlay
								loop
								muted
								playsInline></video>
						</div>
					</div>
				</div>
			</div>
			<div className='spacing'></div>
		</div>
	);
};

export default AppleTv;
