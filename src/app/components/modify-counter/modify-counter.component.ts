import { Component, Input, OnInit } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { AppState } from '../../../redux/models/state';

@Component({
  selector: 'app-modify-counter',
  templateUrl: './modify-counter.component.html',
  styleUrls: ['./modify-counter.component.scss']
})
export class ModifyCounterComponent implements OnInit {
  @Input() counterAction: Action;
  @Input() title: string;

  constructor(
    private store: Store<AppState>
  ) {
  }

  ngOnInit(): void {
  }

  modifyCounter() {
    this.store.dispatch(this.counterAction);
  }
}
