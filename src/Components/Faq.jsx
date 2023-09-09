import React, { useState } from "react";
import GetStarted from "./GetStarted";
import plus from "../icons/plus_icon.png";

const Faq = () => {
	const [isVisible1, setIsVisible1] = useState(false);
	const [isVisible2, setIsVisible2] = useState(false);
	const [isVisible3, setIsVisible3] = useState(false);
	const [isVisible4, setIsVisible4] = useState(false);
	const [isVisible5, setIsVisible5] = useState(false);
	const [isVisible6, setIsVisible6] = useState(false);

	const handleClick1 = () => {
		setIsVisible1(!isVisible1);
	};
	const handleClick2 = () => {
		setIsVisible2(!isVisible2);
	};
	const handleClick3 = () => {
		setIsVisible3(!isVisible3);
	};
	const handleClick4 = () => {
		setIsVisible4(!isVisible4);
	};
	const handleClick5 = () => {
		setIsVisible5(!isVisible5);
	};

	const handleClick6 = () => {
		setIsVisible6(!isVisible6);
	};

	return (
		<div className='faq'>
			<div className='container'>
				<div className='faq_container'>
					<h2>Frequently Asked Questions</h2>
					<div className='full_list'>
						<ul>
							<li>
								<button className='question' onClick={() => handleClick1()}>
									<h3>What is Netflix?</h3>
									<img src={plus} alt='plus sign' />
								</button>
								{isVisible1 && (
									<div className='answer'>
										<span>
											Netflix is a streaming service that offers a wide variety
											of award-winning TV shows, movies, anime, documentaries,
											and more on thousands of internet-connected devices.
											<br /> <br />
											You can watch as much as you want, whenever you want
											without a single commercial - all for one low monthly
											price. There's always something new to discover and new TV
											shows and movies are added every week!
										</span>
									</div>
								)}
							</li>
							<li>
								<button className='question' onClick={() => handleClick2()}>
									<h3>How much does Netflix cost?</h3>
									<img src={plus} alt='plus sign' />
								</button>
								{isVisible2 && (
									<div className='answer'>
										<span>
											Watch Netflix on your smartphone, tablet, Smart TV,
											laptop, or streaming device, all for one fixed monthly
											fee. Plans range from 29 pln to 60 pln a month. No extra
											costs, no contracts.
										</span>
									</div>
								)}
							</li>
							<li>
								<button className='question' onClick={() => handleClick3()}>
									<h3>Where can I watch?</h3>
									<img src={plus} alt='plus sign' />
								</button>
								{isVisible3 && (
									<div className='answer'>
										<span>
											Watch anywhere, anytime. Sign in with your Netflix account
											to watch instantly on the web at netflix.com from your
											personal computer or on any internet-connected device that
											offers the Netflix app, including smart TVs, smartphones,
											tablets, streaming media players and game consoles. <br />
											<br /> You can also download your favorite shows with the
											iOS, Android, or Windows 10 app. Use downloads to watch
											while you're on the go and without an internet connection.
											Take Netflix with you anywhere.
										</span>
									</div>
								)}
							</li>
							<li>
								<button className='question' onClick={() => handleClick4()}>
									<h3>How do I cancel?</h3>
									<img src={plus} alt='plus sign' />
								</button>
								{isVisible4 && (
									<div className='answer'>
										<span>
											Netflix is flexible. There are no pesky contracts and no
											commitments. You can easily cancel your account online in
											two clicks. There are no cancellation fees - start or stop
											your account anytime.
										</span>
									</div>
								)}
							</li>
							<li>
								<button className='question' onClick={() => handleClick5()}>
									<h3>What can I watch on Netflix?</h3>
									<img src={plus} alt='plus sign' />
								</button>
								{isVisible5 && (
									<div className='answer'>
										<span>
											Netflix has an extensive library of feature films,
											documentaries, TV shows, anime, award-winning Netflix
											originals, and more. Watch as much as you want, anytime
											you want.
										</span>
									</div>
								)}
							</li>
							<li>
								<button className='question' onClick={() => handleClick6()}>
									<h3>Is Netflix good for kids?</h3>
									<img src={plus} alt='plus sign' />
								</button>
								{isVisible6 && (
									<div className='answer'>
										<span>
											The Netflix Kids experience is included in your membership
											to give parents control while kids enjoy family-friendly
											TV shows and movies in their own space. <br />
											<br /> Kids profiles come with PIN-protected parental
											controls that let you restrict the maturity rating of
											content kids can watch and block specific titles you don't
											want kids to see.
										</span>
									</div>
								)}
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
