import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';

import { ContadorComponent } from './contador/contador.component';
import { contador } from './contador/contador.reducer';

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ contador })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
