import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Action, Store } from '@ngrx/store';
import { AppState } from '../../../redux/models/state';
import { PayloadCounterAction } from '../../../redux/counter/counter.actions';

@Component({
  selector: 'app-modify-counter-payload',
  templateUrl: './modify-counter-payload.component.html',
  styleUrls: ['./modify-counter-payload.component.scss']
})
export class ModifyCounterPayloadComponent implements OnInit, AfterViewInit {
  counterForm: FormGroup;
  private readonly INIT_COUNTER = 0;
  private counterAction: Action;
  @Input() title;

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

  ngAfterViewInit(): void {
    this.getCounterControl().valueChanges
      .subscribe((value) => this.counterAction = new PayloadCounterAction(value));
  }

  updateCounter() {
    this.store.dispatch(this.counterAction);
  }

  private getCounterControl(): AbstractControl {
    return this.counterForm.get('counter');
  }
}
