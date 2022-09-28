import React from "react";
import SubCartegory from "../SubCartegory";

let Body1 = `Online Tutoring,
Gaming,
Astrology & Psychics,
Modeling & Acting,
Wellness,
Traveling,
Fitness Lessons,
Dance Lessons,
Life Coaching`.split(",");
let Body2 = `Greeting Cards & Videos,
Personal Stylists,
Cooking Lessons,
Arts & Crafts,
Puzzle & Game Creation,
Family & Genealogy,
Collectibles,
Other`.split(",");


const Lifestyle = () => {
	return (
		<div className="z-20 menu-lifestyle top-1">
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

export default Lifestyle;
