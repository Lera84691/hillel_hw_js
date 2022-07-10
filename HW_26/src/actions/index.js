export const BATTLE_SET_PLAYER = "player/set";
export const BATTLE_RESET_PLAYER = "player/reset";


export function makePlayerSet(idx, username) {
	return {
		type: BATTLE_SET_PLAYER,
		payload: {
			idx,
			username
		}
	}
};

export function makePlayerReset(idx) {
	return {
		type: BATTLE_RESET_PLAYER,
		payload: {
			idx
		}
	}
};