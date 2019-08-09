import { useEffect, useState } from 'react';

export const useDevicxeOrientation = () => {
	const [deviceOrientation, setDeviceOrientation] = useState(null);

	useEffect(() => {
		const handleDeviceoOrientation = e => {
			const { alpha, beta, gamma } = e;
			setDeviceOrientation({ alpha, beta, gamma });
		};
		window.addEventListener('deviceorientation', handleDeviceoOrientation);
		return () => {
			window.removeEventListener(
				'deviceorientation',
				handleDeviceoOrientation
			);
		};
	}, [deviceOrientation]);

	return { deviceOrientation };
};
