import {combineReducers, createStore, applyMiddleware, Store} from 'redux';
import ReduxThunk from 'redux-thunk';
import HomeReducer from './home';
import {HomeInterface} from './home/types';

const rootReducer = combineReducers({
  homeReducer: HomeReducer,
});

export interface AppState {
  homeReducer: HomeInterface;
}

export const store: Store<AppState> = createStore(
  rootReducer,
  applyMiddleware(ReduxThunk),
);
