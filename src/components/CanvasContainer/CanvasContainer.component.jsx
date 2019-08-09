import React, { useEffect } from 'react';
import Canvas from '../Canvas/Canvas.component';

import style from './CanvasContainer.module.scss';

import { useDevicxeOrientation } from '../../utils/use-device-orientation';
import { useKirby } from '../../utils/kirby';
import SensitivityUpdate from '../SensitivityUpdate/SensitivityUpdate.component';

const CANVAS_ELEMENT_CLASS = 'kirby-canvas';

const NotSupport = () => (
	<section className={style.message}>
		<h1>Not supported!</h1>
		<p>Your browser does not support device orientation....</p>
		<p>Please try with mobile device!</p>
	</section>
);

const CanvasContainer = () => {
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
		<div className={style.container}>
			{!deviceOrientation && <NotSupport />}
			<SensitivityUpdate
				sensitivity={sensitivity}
				setSensitivity={setSensitivity}
			/>
			<Canvas className={CANVAS_ELEMENT_CLASS} />
		</div>
	);
};

export default CanvasContainer;
