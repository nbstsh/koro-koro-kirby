import React from 'react';

import style from './SensitivityUpdate.module.scss';

const SensitivityUpdate = ({ sensitivity, setSensitivity }) => {
	const onMinusClick = () => {
		if (sensitivity === 0) return;
		setSensitivity(sensitivity - 1);
	};
	return (
		<div className={style.container}>
			<button
				className={style.button}
				onClick={() => setSensitivity(sensitivity + 1)}
			>
				+
			</button>
			<span className={style.number}>{sensitivity}</span>
			<button className={style.button} onClick={onMinusClick}>
				-
			</button>
		</div>
	);
};

export default SensitivityUpdate;
