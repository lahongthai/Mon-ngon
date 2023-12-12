import {CATEGORIES} from '../Const';

const INITIAL_STATE = {
  DATA: [],
};
export default function reduces(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CATEGORIES:
      return {
        ...state,
        data: action.data,
      };
    default:
      return state;
  }
}
