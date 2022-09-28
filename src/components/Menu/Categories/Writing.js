import React from "react";
import SubCartegory from "../SubCartegory";

let Body1 = `Articles & Blog Posts,
Translation,
Proofreading & Editing,
Resume Writing,
Cover Letters,
LinkedIn Profiles,
Ad Copy,
Sales Copy,
Social Media Copy,
Email Copy,
Case Studies`.split(",");
let Body2 = `Book & eBook Writing,
Book Editing,
Scriptwriting,
Podcast Writing,
Beta Reading,
Creative Writing,
Brand Voice & Tone,
UX Writing,
Speechwriting,
eLearning Content Development,
Technical Writing`.split(",");
let Body3 = `Job Descriptions,
White Papers,
Website Content,
Product Descriptions,
Press Releases,
Business Names & Slogans,
Grant Writing,
Transcription,
Research & Summaries,
Writing Advice,
Other`.split(",");

const Writing = () => {
	return (
		<div className="absolute z-20 top-1">
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

export default Writing;
