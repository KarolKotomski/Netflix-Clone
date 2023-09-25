import React from "react";
import { Link } from "react-router-dom";

const NoMatchMain = () => {
	return (
		<main className='noMatch_main'>
			<div className='container_long'>
				<div className='noMatch_main_container_long'>
					<div className='content'>
						<h1>Lost your way?</h1>
						<p>
							Sorry, we can't find that page. You'll find lots to explore on the
							home page.
						</p>
						<Link to='/' onClick={() => window.scrollTo(0, 0)}>
							<button>Netflix Home</button>
						</Link>
					</div>
				</div>
			</div>
		</main>
	);
};

export default NoMatchMain;
