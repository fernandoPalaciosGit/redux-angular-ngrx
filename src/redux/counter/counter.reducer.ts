import { COUNTER_ACTIONS } from './counter.actions';
import { Action } from '@ngrx/store';
import { PayloadAction } from './models/payload';

const INIT_STATE = 0;
export const counterReducer = (state: number = INIT_STATE, action: PayloadAction) => {
  switch (action.type) {
    case COUNTER_ACTIONS.INCREMENT.type:
      return ++state;
    case COUNTER_ACTIONS.DECREMENT.type:
      return --state;
    case COUNTER_ACTIONS.PAYLOAD.type:
      return state += action.payload;
    default:
      return state;
  }
};