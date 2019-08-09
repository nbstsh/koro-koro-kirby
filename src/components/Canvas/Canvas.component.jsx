import React, { useEffect } from 'react';

import { useDevicxeOrientation } from '../../utils/use-device-orientation';
import { useKirby } from '../../utils/kirby';

const CANVAS_ELEMENT_CLASS = 'kirby-canvas';

const Canvas = () => {
	const { deviceOrientation } = useDevicxeOrientation();
	const { moveKirby } = useKirby(CANVAS_ELEMENT_CLASS);

	useEffect(() => {
		if (!deviceOrientation) return;

		const { beta, gamma } = deviceOrientation;

		moveKirby(gamma, beta / 2);
	}, [deviceOrientation, moveKirby]);

	return (
		<canvas
			className={CANVAS_ELEMENT_CLASS}
			width={window.innerWidth}
			height={window.innerHeight}
		/>
	);
};

export default Canvas;
