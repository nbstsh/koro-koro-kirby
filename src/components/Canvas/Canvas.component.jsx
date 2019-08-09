import React, { useEffect } from 'react';

import { useDevicxeOrientation } from '../../utils/use-device-orientation';
import { useKirby } from '../../utils/kirby';

const CANVAS_ELEMENT_CLASS = 'kirby-canvas';

const Canvas = () => {
	const { deviceOrientation } = useDevicxeOrientation();
	const { moveKirby, sensitivity, setSensitivity } = useKirby(
		CANVAS_ELEMENT_CLASS
	);

	useEffect(() => {
		if (!deviceOrientation) return;

		const { beta, gamma } = deviceOrientation;

		moveKirby(gamma, beta / 2);
	}, [deviceOrientation, moveKirby]);

	return (
		<>
			<button style={{padding: '1rem'}} onClick={() => setSensitivity(sensitivity + 1)}>+</button>
			<span>{sensitivity}</span>
			<button style={{padding: '1rem'}}  onClick={() => setSensitivity(sensitivity - 1)}>-</button>
			<canvas
				className={CANVAS_ELEMENT_CLASS}
				width={window.innerWidth}
				height={window.innerHeight}
			/>
		</>
	);
};

export default Canvas;
