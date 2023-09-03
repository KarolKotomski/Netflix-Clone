import React from 'react';
import "../Styles/Kids.css";
import kids from "../images/kids.png";

const Kids = () => {
  return (
    <div className='kids'>
			<div className='container'>
				<div className='kids_container'>
					<div className='screen'>
						<img
							src={kids}
							alt='mobile phone showing different movies'
						/>
					</div>
					<div className='text'>
						<h2>Create profiles for kids</h2>
						<p>
            Send kids on adventures with their favorite characters in a space made just for them—free with your membership.
						</p>
					</div>
				</div>
			</div>
			<div className='spacing'></div>
		</div>
  )
}

export default Kids