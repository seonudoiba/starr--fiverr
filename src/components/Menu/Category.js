import React, { useState } from "react";

import ShowCategories from "./ShowCategories";
const Category = ({category , children}) => {
	const [isGraphicsShown, setIsGraphicsShown] = useState(false);
	const [mycategory, setcategory] = useState('');

	let mouseleave =()=>{
		setIsGraphicsShown(false);
		setcategory(category)
	}
	

	return (
		<div
			className="menu-item pb-2 hover:pb-0 hover:shadow-lg hover:cursor-pointer relative"
			onMouseEnter={() => setIsGraphicsShown(true)}
			onMouseLeave={mouseleave}>
			{category}
			{isGraphicsShown && (
				<>
					<div className="bg-blue-700 w-18 mx-auto h-2px mt-2"></div>
					
					<ShowCategories identify={mycategory}/> 
					
				</>
			)}
		</div>
	);
};

export default Category;
