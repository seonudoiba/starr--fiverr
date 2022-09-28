import React from "react";
import GraphicsCategory from "./Categories/GraphicsCategory";
import MarketingCategory from "./Categories/MarketingCategory";
import Writing from "./Categories/Writing";
import Video from "./Categories/Video";
import Music from "./Categories/Music";
import Programming from "./Categories/Programming";
import Business from "./Categories/Business";
import Lifestyle from "./Categories/Lifestyle";
import Trending from "./Categories/Trending";

const ShowCategories = ({ identify }) => {
	return (
		<div className="relative bg-white">
			{identify === "Graphics & Design" && <GraphicsCategory />}
			{identify === "Digital Marketing" && <MarketingCategory />}
			{identify === "Writing & Translation" && <Writing />}
			{identify === "Video & Animation" && <Video />}
			{identify === "Music & Audio" && <Music />}
			{identify === "Programming & Tech" && <Programming />}
			{identify === "Business" && <Business />}
			{identify === "Lifestyle" && <Lifestyle />}
			{identify === "Trending" && <Trending />}
		</div>
	);
};

export default ShowCategories;
