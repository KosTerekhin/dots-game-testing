import React from 'react';

const GameItem = (props) => {
	const { increaseCount, field, color, id } = props;

	// HANDLE CLICK or ADD GREEN COLOR
	const handleClick = () => {
		if (color === 'blue' && color !== 'red') {
			increaseCount('green', id);
		}
	};

	let itemStyle = {
		flexBasis: `${100 / field}%`,
		height: `${350 / field}px`
	};

	return <div className={`game-item ${color}`} style={itemStyle} onClick={handleClick} />;
};

export default GameItem;
