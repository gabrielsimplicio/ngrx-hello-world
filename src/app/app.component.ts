import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import * as ContadorActions from './reducers/contador.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  contador$: Observable<number>;

  constructor(
    private store: Store<any>
  ) { }

  ngOnInit() {
    this.contador$ = this.store.select('contadorReducer');
  }

  incrementar() {
    this.store.dispatch(new ContadorActions.Incrementar());
  }

  decrementar() {
    this.store.dispatch(new ContadorActions.Decrementar());
  }
}
