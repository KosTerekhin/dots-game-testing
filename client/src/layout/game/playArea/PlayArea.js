import React, { useContext, useEffect } from 'react';
import Random from 'random-item';
import GameItem from './GameItem';

import gameContext from '../../../context/game/GameContext';
import UserContext from '../../../context/user/UserContext';

const PlayArea = () => {
	const {
		gameElements,
		gameState,
		increaseCount,
		gameEnded,
		randomArray,
		updateRandomElement,
		currentGame: { delay, field },
		count: { red, green }
	} = useContext(gameContext);

	const { postWinner, setStartTime } = useContext(UserContext);

	// MAIN GAME FUNCTION
	const startGame = () => {
		// ADDING BLUE ITEM

		// removing previous numbers from the game field
		const arr = [ ...gameElements.keys() ];
		randomArray.length > 0 &&
			randomArray.forEach((random) => {
				arr.splice(arr.indexOf(random), 1);
			});

		// creating random number from filtered array
		if (gameElements.length > 0) {
			let randomElement = Random(arr);

			// setting blue color and updating array for next iteration
			updateRandomElement(randomElement);

			// HANDLING TIMEOUT or ADDING RED COLOR
			setTimeout(() => {
				if (gameElements[randomElement].color !== 'green' && gameElements[randomElement].color === 'blue') {
					increaseCount('red', randomElement);
				}
			}, delay);
		} else return;
	};

	useEffect(
		() => {
			// START THE GAME
			if (gameState === 'game') {
				startGame();

				// saving start time
				if (red === 0 && green === 0) {
					setStartTime(Date.now());
				}
			}

			// CONDITION TO FINISH THE GAME
			if (field) {
				const condition = Math.pow(field, 2) / 2;
				if (red > condition || green > condition) {
					// updating DOM
					gameEnded();
					// submit computer as a winner to the server
					red > condition && postWinner('computer', Date.now());
					// submit player as a winner to the server
					green > condition && postWinner('player', Date.now());
				}
			}
		},
		// eslint-disable-next-line
		[ gameState, red, green ]
	);

	if (field) {
		return (
			<div className="Game">
				{gameElements.map((element, index) => {
					return (
						<GameItem
							key={index}
							id={index}
							field={field}
							increaseCount={increaseCount}
							color={element.color}
						/>
					);
				})}
			</div>
		);
	} else {
		return null;
	}
};

export default PlayArea;
