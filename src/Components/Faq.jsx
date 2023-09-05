import React from "react";
import GetStarted from "./GetStarted";

const Faq = () => {
	return (
		<div className='faq'>
			<div className='container'>
				<div className='faq_container'>
					<h2>Frequently Asked Questions</h2>
					<div className='full_list'>
						<ul>
							<li>
								<h3 className='question'>What is Netflix?</h3>
								<div className='answer'>
									<span>
										Netflix is a streaming service that offers a wide variety of
										award-winning TV shows, movies, anime, documentaries, and
										more on thousands of internet-connected devices.<br></br>
										You can watch as much as you want, whenever you want without
										a single commercial - all for one low monthly price. There's
										always something new to discover and new TV shows and movies
										are added every week!
									</span>
								</div>
							</li>
						</ul>
					</div>
					<GetStarted />
				</div>
			</div>

			<div className='spacing'></div>
		</div>
	);
};

export default Faq;
