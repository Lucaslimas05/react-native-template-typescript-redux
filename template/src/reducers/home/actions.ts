import {Types} from './types';

export const alterTitle = (value: string) => {
  return {type: Types.MODIFICA_TITLE, payload: value};
};
