import React from "react";
import SubCartegory from "../SubCartegory";

let Body1 = `Virtual Assistant,
E-Commerce Management,
Market Research,
Sales,
Customer Care,
CRM Management,
ERP Management,
Supply Chain Management,
Project Management,
Event Management,
Game Concept Design`.split(",");
let Body2 = `Business Plans,
Financial Consulting,
Legal Consulting,
Business Consulting,
Presentations,
HR Consulting,
Career Counseling,
Data Entry,
Data Analytics,
Data Visualization,
Other`.split(",");


const Business = () => {
	return (
		<div className="menu-business z-20 top-1">
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
				
			</div>
		</div>
	);
};

export default Business;
