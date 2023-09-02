import React from "react";
import mobile from "../images/mobile.jpg";

const Mobile = () => {
	return (
		<div className='mobile'>
			<div className='container'>
				<div className='mobile_container'>
					<div className='screen'>
						<img
							src={mobile}
							alt='mobile phone showing different movies'
						/>
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
