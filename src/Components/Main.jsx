import React from "react";
import "../Styles/Main.css";

const Main = () => {
	return (
		<div className='main'>
			<div className='container'>
				<div className='main_container'>
					<div className='section_1'>
						<h2>
							The biggest local and international hits. The best stories. All
							streaming here.
						</h2>
						<p>Watch anywhere. Cancel anytime.</p>
						<div className='get_started_title'>
							<h3>
								Ready to watch? Enter your email to create or restart your
								membership.
							</h3>
							<div className='get_started_menu'>
								<input type='email' name='' id='' />
								<button>{"Get Started" + " >"}</button>
							</div>
						</div>
					</div>

					{/* <div className='section_2'></div>
					<div className='section_3'></div>
					<div className='section_4'></div>
					<div className='section_5'></div>
					<div className='section_faq'></div> */}
				</div>
			</div>
			<div className='spacing'></div>
			<div className='container'>
				<div className='main_container'>
					<div className='section_2'>
						<h1>HELLO</h1>
					</div>
				</div>
			</div>
			<div className='spacing'></div>
			<div className='container'>
				<div className='main_container'>
					<div className='section_3'>
						<h1>HELLO</h1>
					</div>
				</div>
			</div>
			<div className='spacing'></div>
			<div className='container'>
				<div className='main_container'>
					<div className='section_4'>
						<h1>HELLO</h1>
					</div>
				</div>
			</div>
			<div className='spacing'></div>
			<div className='container'>
				<div className='main_container'>
					<div className='section_5'>
						<h1>HELLO</h1>
					</div>
				</div>
			</div>
			<div className='spacing'></div>
			<div className='container'>
				<div className='main_container'>
					<div className='faq'>
						<h1>FAQ</h1>
					</div>
				</div>
			</div>
			<div className='spacing'></div>
		</div>
	);
};

export default Main;
