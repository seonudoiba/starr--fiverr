import React from "react";
import SubCartegory from "../SubCartegory";

let Body1 = `Dropshipping,
E-Commerce Marketing,
Lead Generation,
Discord Services,
NFT Services,
Architecture & Interior Design`.split(",");
let Body2 = `Data,
Resume Writing,
Search Engine Optimization (SEO),
Arts & Crafts,
Character Animation,
Image Editing`.split(",");


const Trending = () => {
	return (
		<div className="z-20 menu-trending top-1">
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

export default Trending;
