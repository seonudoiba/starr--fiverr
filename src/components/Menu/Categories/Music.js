import React from "react";
import SubCartegory from "../SubCartegory";

let Body1 = `Voice Over,
Producers & Composers,
Singers & Vocalists,
Session Musicians,
Jingles & Intros,
Songwriters,
Online Music Lessons,
Beat Making,
Audiobook Production,
Audio Ads Production,
Sound Design,
Mixing & Mastering`.split(",");
let Body2 = `Audio Editing,
Podcast Editing,
Music Transcription,
Vocal Tuning,
DJ Drops & Tags,
DJ Mixing,
Remixing & Mashups,
Synth Presets,
Meditation Music,
Audio Logo & Sonic Branding,
Music & Audio Advice,
Other`.split(",");


const Music = () => {
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
				
			</div>
		</div>
	);
};

export default Music;
