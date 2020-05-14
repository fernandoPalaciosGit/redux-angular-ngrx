import {
  CounterActions,
  DECREMENT_COUNTER_TYPE,
  INCREMENT_COUNTER_TYPE,
  PAYLOAD_COUNTER_TYPE,
  RESET_COUNTER_TYPE
} from './counter.actions';

const INIT_STATE = 0;
export const counterReducer = (state: number = INIT_STATE, action: CounterActions) => {
  switch (action.type) {
    case INCREMENT_COUNTER_TYPE:
      return ++state;
    case DECREMENT_COUNTER_TYPE:
      return --state;
    case PAYLOAD_COUNTER_TYPE:
      return state += action.payload;
    case RESET_COUNTER_TYPE:
      return INIT_STATE;
    default:
      return state;
  }
};
