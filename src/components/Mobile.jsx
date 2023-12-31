import React from "react";
import mobile from "../images/mobile.jpg";
import boxshot from "../images/boxshot.png";
import downloadGif from "../icons/download-icon.gif";

const Mobile = () => {
	return (
		<div className='mobile'>
			<div className='container'>
				<div className='mobile_container'>
					<div className='screen'>
						<div className='wrapper'>
							<img src={mobile} alt='mobile phone showing different movies' />
							<div className='download_box'>
								<div className='boxshot'>
									<img src={boxshot} alt='stranger things boxshot' />
								</div>
								<div className='content'>
									<div className='title'>Stranger Things</div>
									<div className='process'>Downloading...</div>
								</div>

								<div className='download_circle'>
									<img src={downloadGif} alt='downloading process circle' />
								</div>
							</div>
						</div>
					</div>
					<div className='text'>
						<h2>Download your shows to watch offline</h2>
						<p>
							Save your favorites easily and always have something to watch.
						</p>
					</div>
				</div>
			</div>
			<div className='spacing'></div>
		</div>
	);
};

export default Mobile;
