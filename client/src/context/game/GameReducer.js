export default (state, action) => {
	switch (action.type) {
		case 'GET_SETTINGS':
			return {
				...state,
				gameSettings: action.payload
			};

		case 'SET_GAME':
			const playArea = [ ...Array(Math.pow(action.payload.field, 2)) ];
			return {
				...state,
				currentGame: action.payload,
				gameElements: playArea.map(() => {
					return {
						color: ''
					};
				})
			};

		case 'START_GAME':
			return {
				...state,
				gameState: 'game',
				error: null
			};

		case 'UPDATE_RED': {
			return {
				...state,
				count: {
					...state.count,
					red: state.count.red + 1
				},
				gameElements: state.gameElements.map((element, index) => {
					index === action.payload && (element.color = 'red');
					return element;
				})
			};
		}

		case 'UPDATE_GREEN': {
			return {
				...state,
				count: {
					...state.count,
					green: state.count.green + 1
				},
				gameElements: state.gameElements.map((element, index) => {
					index === action.payload && (element.color = 'green');
					return element;
				})
			};
		}

		case 'UPDATE_RANDOM':
			return {
				...state,
				randomArray: [ ...state.randomArray, action.payload ],
				gameElements: state.gameElements.map((element, index) => {
					index === action.payload && (element.color = 'blue');
					return element;
				})
			};

		case 'GAME_ENDED':
			return {
				...state,
				gameState: 'over',
				count: {
					red: 0,
					green: 0
				},
				randomArray: [],
				gameElements: state.gameElements.map((element) => {
					element.color = '';
					return element;
				})
			};

		case 'ADD_COLOR_ELEMENT':
			return {
				...state,
				gameElements: [
					...state.gameElements,
					{
						color: ''
					}
				]
			};

		case 'NO_SETTINGS':
			return {
				...state,
				error: 'No game settings, server error'
			};

		case 'INVALID_NAME':
			return {
				...state,
				gameState: 'error',
				error: 'Enter a name to start the game'
			};
		default:
			return state;
	}
};
