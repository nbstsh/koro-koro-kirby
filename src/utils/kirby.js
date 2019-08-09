import { useEffect, useRef, useCallback, useState } from 'react';
import Zdog from 'zdog';

// colors
const COLOR_PINK = '#F8B';
const COLOR_BLUSH = '#F5A';
const COLOR_BLACK = '#333';
const COLOR_RED = '#D03';

// SIZE
const ZOOM = 3;
const BODY_STROKE = 22;

// SENSITIVITY
const SENSITIVITY = 1;

// 1 TAU = 1 round
var TAU = Zdog.TAU;

let canvasElementClassName = 'kirby-face-canvas';

const setCanvasElementClassName = v => (canvasElementClassName = v);

const generateIllo = () =>
	new Zdog.Illustration({
		element: `.${canvasElementClassName}`,
		zoom: ZOOM
	});

const addBodyToIllo = illo =>
	new Zdog.Shape({
		stroke: BODY_STROKE,
		addTo: illo,
		color: COLOR_PINK
	});

const addFaceToBody = body =>
	new Zdog.Anchor({
		translate: { z: 10.5 },
		addTo: body
	});

const addEyeToFace = (face, rate) => {
	const eyeGroup = new Zdog.Group({
		addTo: face,
		translate: { x: 2.4 * rate, y: -2 },
		rotate: { x: 0.1 }
	});
	// eye
	new Zdog.Ellipse({
		width: 1.4,
		height: 5.5,
		addTo: eyeGroup,
		stroke: 1,
		color: COLOR_BLACK,
		fill: true
	});
	// eye highlight
	new Zdog.Ellipse({
		width: 1,
		height: 2,
		addTo: eyeGroup,
		translate: { y: -1.5, z: 0.5 },
		stroke: 0.5,
		color: '#FFF',
		fill: true
	});
};

const addCheeckToFace = (face, rate) => {
	new Zdog.Ellipse({
		width: 2.5,
		height: 1,
		translate: { x: 5.7 * rate, y: 1.5, z: -1 },
		rotate: { y: -10 * rate },
		addTo: face,
		color: COLOR_BLUSH,
		stroke: 1
	});
};

const addMouthToFace = face => {
	// mouth
	new Zdog.Shape({
		path: [
			{ x: 0, y: 0 },
			{
				bezier: [
					{ x: 1.1, y: 0 },
					{ x: 1.1, y: 0.2 },
					{ x: 1.1, y: 0.5 }
				]
			},
			{
				bezier: [
					{ x: 1.1, y: 1.1 },
					{ x: 0.2, y: 1.8 },
					{ x: 0, y: 1.8 }
				]
			},
			{
				bezier: [
					{ x: -0.2, y: 1.8 },
					{ x: -1.1, y: 1.1 },
					{ x: -1.1, y: 0.5 }
				]
			},
			{ bezier: [{ x: -1.1, y: 0.2 }, { x: -1.1, y: 0 }, { x: 0, y: 0 }] }
		],
		addTo: face,
		translate: { y: 2, z: -0.5 },
		stroke: 1,
		color: COLOR_RED,
		fill: true
	});
};

export const initIllo = () => {
	const illo = generateIllo();
	const body = addBodyToIllo(illo);
	const face = addFaceToBody(body);
	addEyeToFace(face, 1);
	addEyeToFace(face, -1);
	addCheeckToFace(face, 1);
	addCheeckToFace(face, -1);
	addMouthToFace(face);

	return illo;
};

export const useKirby = canvasElementClassName => {
	const illoRef = useRef(null);
	const [sensitivity, setSensitivity] = useState(SENSITIVITY);

	useEffect(() => {
		if (canvasElementClassName)
			setCanvasElementClassName(canvasElementClassName);

		const illo = initIllo();
		illo.updateRenderGraph();
		illoRef.current = illo;
	}, [canvasElementClassName]);

	const moveKirby = useCallback(
		(incrementX, incrementY) => {
			const illo = illoRef.current;
			illo.rotate.x += (TAU / 360) * -1 * incrementY * sensitivity;
			illo.rotate.y += (TAU / 360) * -1 * incrementX * sensitivity;
			illo.translate.x += incrementX * 0.1 * sensitivity;
			illo.translate.y += incrementY * 0.1 * sensitivity;
			illo.updateRenderGraph();
		},
		[illoRef, sensitivity]
	);

	return { moveKirby, sensitivity, setSensitivity };
};
