import { Component, Input, OnInit } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { AppState } from '../../../redux/models/state';
import { COUNTER_ACTIONS } from '../../../redux/counter/counter.actions';

@Component({
  selector: 'app-modify-counter',
  templateUrl: './modify-counter.component.html',
  styleUrls: ['./modify-counter.component.scss']
})
export class ModifyCounterComponent implements OnInit {
  @Input() reducerActionType: string;
  private action: Action;

  constructor(
    private store: Store<AppState>
  ) {
  }

  ngOnInit(): void {
    this.action = COUNTER_ACTIONS[this.reducerActionType];
  }

  modifyCounter() {
    this.store.dispatch(this.action);
  }
}
