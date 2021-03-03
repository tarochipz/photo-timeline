import React, { useEffect } from 'react';
import './butterfly.css';

export default function Butterfly() {
	let getButterflyElement = () => {
		return document.querySelector('.butterfly');
	};

	const getRandomArbitrary = (min, max) => {
		return Math.random() * (max - min) + min;
	};

	useEffect(() => {
		// window.addEventListener('scroll', setInterval);
		setInterval(() => {
			let numberX = Math.floor(getRandomArbitrary(0, 800));
			let numberY = Math.floor(getRandomArbitrary(0, 500));

			getButterflyElement().style.setProperty('--random-y', numberY + 'px');
			getButterflyElement().style.setProperty('--random-x', numberX + 'px');
		}, 3000);
	}, []);

	return (
		<div className="butterfly">
			<div className="butterfly-wing-1"></div>
			<div className="butterfly-body"></div>
			<div className="butterfly-wing-2"></div>
		</div>
	);
}
