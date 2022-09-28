import React from "react";
import SubCartegory from "../SubCartegory";

let Body1 = `Social Media Marketing,
Social Media Advertising,
Search Engine Optimization (SEO),
Local SEO,
Marketing Strategy,
Public Relations,
Guest Posting,
Video Marketing,
Email Marketing,
Web Analytics,
Text Message Marketing,
Crowdfunding`.split(",");
let Body2 = `Social Media Marketing,
Social Media Advertising,
Search Engine Optimization (SEO),
Local SEO,
Marketing Strategy,
Public Relations,
Guest Posting,
Video Marketing,
Email Marketing,
Web Analytics,
Text Message Marketing,
Crowdfunding`.split(",");


const MarketingCategory = () => {
	return (
		<div className="z-20 absolute top-1">
			<div className="flex justify-evenly bg-white w-auto shadow-lg">
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
				
			</div>
		</div>
	);
};

export default MarketingCategory;
