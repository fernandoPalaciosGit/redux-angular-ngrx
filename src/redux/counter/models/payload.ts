import { Action } from '@ngrx/store';

export interface PayloadAction extends Action {
  payload: any;
}

export interface CounterActions {
  [action: string]: Action | PayloadAction;
}
