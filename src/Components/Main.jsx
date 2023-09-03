import React from "react";
import Hero from "./Hero";
import Tv from "../Components/Tv";
import Mobile from "../Components/Mobile";
import AppleTv from "../Components/AppleTv";
import Kids from "../Components/Kids";
import Faq from "../Components/Faq";

const Main = () => {
	return (
		<>
			<Hero />
			<Tv />
			<Mobile />
			<AppleTv />
			<Kids />
			<Faq />
		</>
	);
};

export default Main;
