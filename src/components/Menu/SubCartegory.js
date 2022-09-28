import React from "react";

const SubCartegory = ({ title, body }) => {
	return (
		<div class="max-w-sm rounded overflow-hidden  text-left">
			<div class="px-6  flex flex-col items-start ">
				{body.map((subbody) => (
					<p class=" text-base leading-loose">{subbody}</p>
				))}
			</div>
		</div>
	);
};

export default SubCartegory;
