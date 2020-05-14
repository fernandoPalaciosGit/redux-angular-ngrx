import { counterReducer } from './counter/counter.reducer';
import { AppState } from './models/state';
import { ActionReducerMap } from '@ngrx/store';

export const appReducer: ActionReducerMap<AppState> = {
  counter: counterReducer
};
