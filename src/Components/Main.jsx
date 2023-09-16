import React from "react";
import Hero from "./Hero";
import Tv from "./Tv";
import Mobile from "./Mobile";
import AppleTv from "./AppleTv";
import Kids from "./Kids";
import Faq from "./Faq";

const Main = () => {
	return (
		<main className='main'>
			<Hero />
			<Tv />
			{/* <Mobile />
			<AppleTv />
			<Kids />
			<Faq /> */}
		</main>
	);
};

export default Main;
