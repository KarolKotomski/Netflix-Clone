import React from "react";
import tv from "../images/tv.png";
import tv_video from "../videos/tv-video.m4v";

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
						<div className='wrapper'>
							<img
								src={tv}
								alt='tv standing on the table and showing different movies'
							/>
							<video src={tv_video} autoPlay loop muted playsInline></video>
						</div>
					</div>
				</div>
			</div>
			<div className='spacing'></div>
		</div>
	);
};

export default Tv;
