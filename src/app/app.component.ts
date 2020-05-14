import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Action, Store } from '@ngrx/store';
import { AppState } from '../redux/models/state';
import { DecrementCounterAction, IncrementCounterAction, ResetCounterAction } from '../redux/counter/counter.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  counter$: Observable<number>;
  readonly resetAction: Action = new ResetCounterAction();
  readonly incrementAction: Action = new IncrementCounterAction();
  readonly decrementAction: Action = new DecrementCounterAction();

  constructor(
    private store: Store<AppState>
  ) {
  }

  ngOnInit(): void {
    this.counter$ = this.store.select('counter');
  }
}
