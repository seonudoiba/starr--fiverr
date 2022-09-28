import React from 'react'

const GraphicsSubCartegory = ({title, body}) => {
    return (
		<div class="max-w-sm rounded overflow-hidden  text-left">
			<div class="px-6 py-4">
				<div class=" text-xl mb-2">{title}</div>
				{body.map((subbody) => (
					<p class=" text-base leading-loose">{subbody}</p>
				))}
			</div>
		</div>
	);
};

 
export default GraphicsSubCartegory