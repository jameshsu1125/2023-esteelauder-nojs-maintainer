import { createContext } from 'react';
import { ACTION, CDN, PAGE } from './constant';

export const Context = createContext();

export const initialState = {
	[ACTION.page]: PAGE.smallBrownEyes,
	[ACTION.cdn]: CDN,
};

export const reducer = (state, action) => {
	if (action.state instanceof Object) {
		let stateStorage = {};
		Object.entries(action.state)
			.map((actionState) => {
				const value = Object.values(ACTION).filter((actionValue) => actionValue === actionState[0]);
				if (value.length > 0) return actionState;
				if (action.type) return [action.type, Object.fromEntries([actionState])];
				return undefined;
			})
			.filter((actionState) => actionState !== undefined)
			.forEach((actionState) => {
				const [key, value] = actionState;
				const prevValue = stateStorage[key];
				if (prevValue) stateStorage = { [key]: { ...prevValue, ...value } };
				else stateStorage = { [key]: value };
			});
		return { ...state, ...stateStorage };
	}
	if (action.type) return { ...state, [action.type]: action.state };
	return state;
};

export const pageName = {
	[PAGE.smallBrownEyes]: '小棕眼',
	[PAGE.softMistVelvetLipGlaze]: '柔霧絲絨唇釉',
	[PAGE.PinkDesireCrystalClearLipBalm]: '粉嫩慾望晶透潤唇膏',
};
