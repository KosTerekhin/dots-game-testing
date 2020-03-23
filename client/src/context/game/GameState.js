import React, { useReducer } from 'react';
import GameContext from './GameContext';
import GameReducer from './GameReducer';
import Axios from '../../axios/axiosDefault';

const GameState = (props) => {
	const initialState = {
		gameSettings: null,
		gameState: 'default',
		count: {
			red: 0,
			green: 0
		},
		currentGame: {},
		gameElements: [],
		randomArray: [],
		error: null
	};

	const [ state, dispatch ] = useReducer(GameReducer, initialState);

	// GAME SETTING SELECT + UPDATE PLAY AREA
	const changeGame = (params) => {
		dispatch({
			type: 'SET_GAME',
			payload: params
		});
	};

	// PLAY BUTTON CLICKED or START GAME
	const playButton = () => {
		dispatch({
			type: 'START_GAME'
		});
	};

	// UPDATE STATE ON GAME END
	const gameEnded = () => {
		dispatch({
			type: 'GAME_ENDED'
		});
	};

	// ADDING NEW RANDOM ELEMENT INTO ARRAY
	const updateRandomElement = (random) => {
		dispatch({
			type: 'UPDATE_RANDOM',
			payload: random
		});
	};

	// COUNTING POINTS
	const increaseCount = (type, id) => {
		type === 'red' &&
			dispatch({
				type: 'UPDATE_RED',
				payload: id
			});
		type === 'green' &&
			dispatch({
				type: 'UPDATE_GREEN',
				payload: id
			});
	};

	// FETCH GAME SETTINGS
	const fetchGameSettings = async () => {
		try {
			const res = await Axios.get(`/game-settings`);

			dispatch({
				type: 'GET_SETTINGS',
				payload: res.data
			});
			changeGame(res.data[Object.keys(res.data)[0]]);
		} catch (error) {
			dispatch({
				type: 'NO_SETTINGS'
			});
		}
	};

	// NAME VALIDATION
	const setNameError = () => {
		dispatch({
			type: 'INVALID_NAME'
		});
	};

	return (
		<GameContext.Provider
			value={{
				gameSettings: state.gameSettings,
				gameState: state.gameState,
				currentGame: state.currentGame,
				gameElements: state.gameElements,
				count: state.count,
				randomArray: state.randomArray,
				error: state.error,
				fetchGameSettings,
				changeGame,
				playButton,
				gameEnded,
				setNameError,
				increaseCount,
				updateRandomElement
			}}
		>
			{props.children}
		</GameContext.Provider>
	);
};

export default GameState;
