import React from "react";
import SubCartegory from "../SubCartegory";

let Body1 = `Video Editing,
Video Ads & Commercials,
Whiteboard & Animated Explainers,
Character Animation,
Music Videos,
Logo Animation,
Intro & Outro Videos,
Visual Effects,
Subtitles & Captions,
Spokesperson Videos,
Unboxing Videos,
Animated GIFs`.split(",");
let Body2 = `3D Product Animation,
Social Media Videos,
E-Commerce Product Videos,
Live Action Explainers,
Lottie & Web Animation,
NFT Animation,
Corporate Videos,
App & Website Previews,
Animation for Streamers,
Slideshow Videos,
Crowdfunding Videos,
Meditation Videos,
Product Photography`.split(",");
let Body3 = `Animation for Kids,
Article to Video,
Game Trailers,
Book Trailers,
Real Estate Promos,
eLearning Video Production,
Video Templates Editing,
Screencasting Videos,
Local Photography,
Videographers,
Filmed Video Production,
Video Advice,
Other`.split(",");

const Video = () => {
	return (
		<div className="menu-video z-20 top-1">
			<div className="flex justify-evenly bg-white  w-auto shadow-lg">
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

export default Video;
