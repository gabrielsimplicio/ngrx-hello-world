import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import * as ContadorActions from './contador.actions';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {

  contador$: Observable<number>;

  constructor(
    private store: Store<any>
  ) { }

  ngOnInit() {
    this.contador$ = this.store.select('contador');
  }

  incrementar() {
    this.store.dispatch(new ContadorActions.Incrementar());
  }

  decrementar() {
    this.store.dispatch(new ContadorActions.Decrementar());
  }

}
