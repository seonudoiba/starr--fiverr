import React from "react";
import SubCartegory from "../SubCartegory";

let Body1 = `WordPress,
Website Builders & CMS,
Game Development,
Development for Streamers,
Web Programming,
E-Commerce Development,
Mobile Apps,
Desktop Applications,
Chatbots`.split(",");
let Body2 = `DevOps & Cloud,
Support & IT,
Online Coding Lessons,
Cybersecurity & Data Protection,
Electronics Engineering,
Convert Files,
User Testing,
QA & Review`.split(",");
let Body3 = `Get Your Website in a Few Steps,
Blockchain & Cryptocurrency,
NFT Development,
Databases,
Data Processing,
Data Engineering,
Data Science,
Other`.split(",");

const Programming = () => {
	return (
		<div className="z-20 menu-programming top-1">
			<div className="flex justify-evenly w-auto bg-white shadow-lg">
				<div className="w-72 flex justify-evenly flex-col py-4 h-auto px-1">
					<div className="w-full">
						<SubCartegory title="" body={Body1} />
					</div>
				</div>
				<div className="w-72 flex justify-evenly flex-col py-4 h-auto px-1">
					<div className="w-full">
						<SubCartegory title="" body={Body2} />
					</div>
				</div>
				<div className="w-72 flex justify-evenly flex-col py-4 h-auto px-1">
					<div className="w-full">
						<SubCartegory title="" body={Body3} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Programming;
