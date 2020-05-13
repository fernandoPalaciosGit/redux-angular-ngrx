import { CounterActions } from './models/payload';

export const COUNTER_ACTIONS: CounterActions = {
  INCREMENT: {
    type: '[Counter] increment once'
  },
  DECREMENT: {
    type: '[Counter] decrement once'
  },
  PAYLOAD: {
    type: '[Counter] increment or decrement counter'
  }
};
