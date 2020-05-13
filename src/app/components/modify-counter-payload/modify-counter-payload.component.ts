import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../../redux/models/state';
import { PayloadAction } from '../../../redux/counter/models/payload';
import { COUNTER_ACTIONS } from '../../../redux/counter/counter.actions';

@Component({
  selector: 'app-modify-counter-payload',
  templateUrl: './modify-counter-payload.component.html',
  styleUrls: ['./modify-counter-payload.component.scss']
})
export class ModifyCounterPayloadComponent implements OnInit {
  counterForm: FormGroup;
  private readonly INIT_COUNTER = 0;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<AppState>
  ) {
  }

  ngOnInit(): void {
    this.counterForm = this.formBuilder.group({
      counter: [this.INIT_COUNTER, [Validators.required]]
    });
  }

  updateCounter($event: Event) {
    this.store.dispatch(this.getCounterAction());
  }

  private getCounterValue(): number {
    return this.counterForm.get('counter').value;
  }

  private getCounterAction(): PayloadAction {
    return {
      type: COUNTER_ACTIONS.PAYLOAD.type,
      payload: this.getCounterValue()
    };
  }
}
