import { COUNTER_ACTIONS } from './counter.actions';
import { Action } from '@ngrx/store';

const INIT_STATE = 0;
export const counterReducer = (state: number = INIT_STATE, action: Action) => {
  switch (action.type) {
    case COUNTER_ACTIONS.INCREMENT.type:
      return state++;
    case COUNTER_ACTIONS.DECREMENT.type:
      return state++;
    default:
      return state;
  }
};
