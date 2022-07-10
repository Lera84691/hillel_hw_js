import {
	BATTLE_SET_PLAYER,
	BATTLE_RESET_PLAYER
} from "../actions";
import { combineReducers } from "redux";

const initialBattleState = {
	players: [{
		name: null,
		image: null
	}, {
		name: null,
		image: null
	}]
};

// https://redux.js.org/usage/structuring-reducers/immutable-update-patterns
function updateObjectInArray(array, action) {
  return array.map((item, index) => {
    if (index !== action.index) {
      // This isn't the item we care about - keep it as-is
      return item
    }

    // Otherwise, this is the one we want - return an updated value
    return {
      ...item,
      ...action.item
    }
  })
}

function battleReducer(state = initialBattleState, action) {
	switch (action.type) {
		case BATTLE_SET_PLAYER:
			if (action.payload.idx >= state.players.length) {
				return state;
			}
			return {
				...state,
				players: updateObjectInArray(state.players, {
					index: action.payload.idx,
					item: {
						name: action.payload.username,
						image: `https://github.com/${action.payload.username}.png?size200`
					}
				})
			};
		case BATTLE_RESET_PLAYER:
			if (action.payload.idx >= state.players.length) {
				return state;
			}
			return {
				...state,
				players: updateObjectInArray(state.players, {
					index: action.payload.idx,
					item: {
						name: null,
						image: null
					}
				})
			};
		default:
			return state;
	} 
	return state;
}

const rootReducer = combineReducers({
	battle: battleReducer
});

export default rootReducer;