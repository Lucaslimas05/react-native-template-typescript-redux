import {AppThunk} from '../thunk';
import {api} from '../axios';
import {GET_HOME_DATA} from '../apis';
import {alterTitle} from '../../reducers/home/actions';

export const getDataHome = (): AppThunk => {
  return dispatch => {
    let response = api.get(GET_HOME_DATA);
    //trata response...
  };
};
