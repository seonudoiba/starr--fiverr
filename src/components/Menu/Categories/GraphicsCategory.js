import React from "react";
import GraphicsSubCartegory from "./GraphicsSubCartegory";
let LogoBody = [
	"Logo Design",
	"Brand Style Guides",
	"Fonts & Typography",
	"Business Cards & Stationery",
];
let GamingBody = ["Game Art", "GraphicsCategory for Streamers", "Twitch Store"];
let ArtBody = [
	"Illustration",
	"NFT Art",
	"Pattern Design",
	"Portraits & Caricatures",
	"Cartoons & Comics",
	"Tattoo Design",
	"Storyboards",
];
let WebBody = `Website Design, App Design,
UX Design,
Landing Page Design,
Icon Design`.split(",");
let MarketingBody = `Social Media Design,
Email Design,
Web Banners,
Signage Design`.split(",");
let PackagingBody = `Packaging & Label Design,
Book Design,
Album Cover Design,
Podcast Cover Art,
Car Wraps`.split(",");
let VisualBody = `Image Editing,
Presentation Design,
Infographic Design,
Vector Tracing,
Resume Design`.split(",");
let ArchitectureBody = `Architecture & Interior Design,
Landscape Design,
Building Engineering,
Building Information Modeling`.split(",");
let FashionBody = `Fashion Design,
Jewelry Design`.split(",");
let PrintBody = `T-Shirts & Merchandise,
Flyer Design,
Brochure Design,
Poster Design,
Catalog Design,
Menu Design,
Invitation Design`.split(",");
let ProductBody = `Industrial & Product Design,
Character Modeling,
Trade Booth Design`.split(",");
let MiscellaneousBody = `Logo Maker Tool,
Design Advice,
Other`.split(",");

const GraphicsCategory = () => {
	return (
		<div className="absolute top-1 z-20">
			<div className="flex justify-evenly bg-white   w-auto shadow-lg">
				<div className="w-72 flex justify-evenly flex-col py-4 h-auto px-1">
					<div className="w-full">
						<GraphicsSubCartegory title="Logo & Brand Identity" body={LogoBody} />
					</div>
					<div className="w-full">
						<GraphicsSubCartegory title="Gaming" body={GamingBody} />
					</div>
					<div className="w-full">
						<GraphicsSubCartegory title="Art & Illustration" body={ArtBody} />
					</div>
				</div>
				<div className="w-72 flex justify-evenly flex-col py-4 h-auto px-1">
					<div className="w-full">
						<GraphicsSubCartegory title="Web & App Design" body={WebBody} />
					</div>
					<div className="w-full">
						<GraphicsSubCartegory title="Marketing Design" body={MarketingBody} />
					</div>
					<div className="w-full">
						<GraphicsSubCartegory title="Packaging & Covers" body={PackagingBody} />
					</div>
				</div>
				<div className="w-72 flex justify-evenly flex-col py-4 h-auto px-1">
					<div className="w-full">
						<GraphicsSubCartegory title="Visual Design" body={VisualBody} />
					</div>
					<div className="w-full">
						<GraphicsSubCartegory
							title="Architecture & Building Design"
							body={ArchitectureBody}
						/>
					</div>
					<div className="w-full">
						<GraphicsSubCartegory title="Fashion & Jewelry" body={FashionBody} />
					</div>
				</div>
				<div className="w-72 flex justify-evenly flex-col py-4 h-auto px-1">
					<div className="w-full">
						<GraphicsSubCartegory title="Print Design" body={PrintBody} />
					</div>
					<div className="w-full">
						<GraphicsSubCartegory title="Product & Characters Design" body={ProductBody} />
					</div>
					<div className="w-full">
						<GraphicsSubCartegory title="Miscellaneous" body={MiscellaneousBody} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default GraphicsCategory;
