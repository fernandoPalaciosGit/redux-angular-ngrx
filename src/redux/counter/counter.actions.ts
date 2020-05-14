import { Action } from '@ngrx/store';

export const INCREMENT_COUNTER_TYPE = '[Counter] increment once';
export const DECREMENT_COUNTER_TYPE = '[Counter] decrement once';
export const PAYLOAD_COUNTER_TYPE = '[Counter] increment or decrement counter';
export const RESET_COUNTER_TYPE = '[Counter] initialize the counter state';

export class IncrementCounterAction implements Action {
  readonly type = INCREMENT_COUNTER_TYPE;
}

export class DecrementCounterAction implements Action {
  readonly type = DECREMENT_COUNTER_TYPE;
}

export class PayloadCounterAction implements Action {
  readonly type = PAYLOAD_COUNTER_TYPE;

  constructor(
    public payload: number
  ) {
  }
}

export class ResetCounterAction implements Action {
  readonly type = RESET_COUNTER_TYPE;
}

export type CounterActions =
  IncrementCounterAction |
  DecrementCounterAction |
  PayloadCounterAction |
  ResetCounterAction;
