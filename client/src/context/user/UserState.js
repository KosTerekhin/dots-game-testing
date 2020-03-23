import React, { useReducer } from 'react';
import UserContext from './UserContext';
import UserReducer from './UserReducer';
import Axios from '../../axios/axiosDefault';

const UserState = (props) => {
	const initialState = {
		currentUser: {
			name: '',
			startTime: null
		},
		latestWinner: '',
		allPlayers: [],
		serverMsg: null
	};

	const [ state, dispatch ] = useReducer(UserReducer, initialState);

	const postWinner = async (winner, endTime) => {
		// winner to send on the server
		const newPlayer = {
			time: (endTime - state.currentUser.startTime) / 1000,
			date: new Date().toLocaleString()
		};

		if (winner === 'player') {
			newPlayer.name = state.currentUser.name;
		} else {
			newPlayer.name = winner;
		}

		try {
			await Axios.post(`/winners`, newPlayer);

			dispatch({
				type: 'SERVER_UPDATED',
				payload: newPlayer.name
			});

			setTimeout(() => {
				dispatch({
					type: 'CLEAR_MESSAGE'
				});
			}, 2000);
		} catch (error) {
			dispatch({
				type: 'SERVER_REJECTED',
				payload: newPlayer.name
			});

			setTimeout(() => {
				dispatch({
					type: 'CLEAR_MESSAGE'
				});
			}, 2000);

			throw error;
		}
	};

	const getAllPlayers = async () => {
		try {
			const res = await Axios.get(`/winners`);

			const topTen = res.data
				.sort((a, b) => {
					return a.time - b.time;
				})
				.slice(0, 9);

			dispatch({
				type: 'ADD_PLAYERS',
				payload: topTen
			});
		} catch (error) {
			dispatch({
				type: 'SERVER_REJECTED'
			});

			setTimeout(() => {
				dispatch({
					type: 'CLEAR_MESSAGE'
				});
			}, 2000);

			throw error;
		}
	};

	const setUser = (user) => {
		dispatch({
			type: 'SET_CURRENT_PLAYER',
			payload: user
		});
	};

	const setStartTime = (time) => {
		dispatch({
			type: 'SET_START_TIME',
			payload: time
		});
	};

	return (
		<UserContext.Provider
			value={{
				currentUser: state.currentUser,
				allUsers: state.allUsers,
				allPlayers: state.allPlayers,
				latestWinner: state.latestWinner,
				serverMsg: state.serverMsg,
				setUser,
				postWinner,
				setStartTime,
				getAllPlayers
			}}
		>
			{props.children}
		</UserContext.Provider>
	);
};

export default UserState;
