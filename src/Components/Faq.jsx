import React, { useState } from "react";
import GetStarted from "./GetStarted";
import plus from "../icons/plus_icon.png";
import { faqData } from "./faqData";

const Faq = () => {
	const [selected, setSelected] = useState(null);

	const toggle = (i) => {
		if (selected === i) {
			return setSelected(null);
		}
		setSelected(i);
	};

	return (
		<div className='faq'>
			<div className='container'>
				<div className='faq_container'>
					<h2>Frequently Asked Questions</h2>
					<div className='full_list'>
						{faqData.map((item, i) => (
							<div className='item' key={i} onClick={() => toggle(i)}>
								<div
									className={
										selected === i ? "question rotated_sign" : "question"
									}>
									<h3>{item.question}</h3>
									<img src={plus} alt='plus sign' />
								</div>
								<div className={selected === i ? "answer_show" : "answer"}>
									<span>{item.answer}</span>
								</div>
							</div>
						))}
					</div>
					<GetStarted />
				</div>
			</div>

			<div className='spacing'></div>
		</div>
	);
};

export default Faq;
