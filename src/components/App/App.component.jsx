import React from 'react';

import style from './App.module.scss';

import CanvasContainer from '../CanvasContainer/CanvasContainer.component';

function App() {
	return (
		<div className={style.app}>
			<h1 className={style.title}>korokoro kirby</h1>
			<CanvasContainer />
		</div>
	);
}

export default App;
