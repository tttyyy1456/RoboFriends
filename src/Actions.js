import {CHANGE_SEARCHFIELD} from './constants';

export const SetSearchField = (text) =>({
	type: CHANGE_SEARCHFIELD,
	payload: text
})