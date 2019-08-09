import React from 'react';

const Canvas = ({ className }) => {
	return (
		<canvas
			className={className}
			width={window.innerWidth}
			height={window.innerHeight}
		/>
	);
};

export default Canvas;
