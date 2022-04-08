import {Reducer} from 'redux';
import {HomeInterface, Types} from './types';

const INITIAL_STATE: HomeInterface = {
  title: 'Home',
};

const reducer: Reducer<HomeInterface> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.MODIFICA_TITLE:
      return {...state, title: action.payload};
    default:
      return state;
  }
};

export default reducer;
