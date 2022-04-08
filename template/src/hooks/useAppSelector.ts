import {TypedUseSelectorHook, useSelector} from 'react-redux';
import type {AppState} from '../reducers/index';

const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;

export default useAppSelector;
