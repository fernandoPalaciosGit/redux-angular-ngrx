import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../redux/models/state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  counter$: Observable<number>;

  constructor(
    private store: Store<AppState>
  ) {
  }

  ngOnInit(): void {
    this.counter$ = this.store.select('counter');
  }
}
