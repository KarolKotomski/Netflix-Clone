import React from "react";
import facebook from "../icons/fb_icon.png";
import instagram from "../icons/insta_icon.png";
import twitter from "../icons/twit_icon.png";
import youtube from "../icons/yt_icon.png";

const BrowseFooter = () => {
	return (
		<div className='browse_footer'>
			<div className='container_long'>
        <div className='browse_footer_container_long'>
          <div className="icons">
            <img src={facebook} alt="facebook icon" />
            <img src={instagram} alt="instagram icon" />
            <img src={twitter} alt="twitter icon" />
            <img src={youtube} alt="youtube icon" />
          </div>
					<div className='list'>
						<ul>
							<li>Audio description</li>
							<li>Help Center</li>
							<li>Gift Cards</li>
							<li>Media Center</li>
							<li>Investor Relations</li>
							<li>Jobs</li>
							<li>Terms</li>
							<li>Privacy</li>
							<li>Legal Notices</li>
							<li>Cookie Preferences</li>
							<li>Corporate Information</li>
							<li>Contact Us</li>
							<li>Ad Choices</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BrowseFooter;
