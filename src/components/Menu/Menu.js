import React from "react";
import Category from "./Category";

const Menu = () => {
	let categories =
		`Graphics & Design,Digital Marketing,Writing & Translation,Video & Animation,Music & Audio,Programming & Tech,Business,Lifestyle,Trending`.split(
			","
		);

	return (
		<div className="hidden md:flex justify-evenly border-y border-black pt-2  my-4">
			{categories.map((category) => (
				<Category category={category}></Category>
			))}
		</div>
	);
};

export default Menu;
