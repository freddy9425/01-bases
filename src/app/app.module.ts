import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import {CounterComponent} from "./counters/counter.component";

import {HeroesModule} from "./heroes/heroes.module";


@NgModule({
  // Usualmente aquí se deben colocar componentes
  declarations: [
    AppComponent,
    CounterComponent,
  ],
  // usualmente aquí se deben colocar otro módulos
  imports: [
    BrowserModule,
    HeroesModule
  ],
  // Son más o menos como servicios específicos a un módulo
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
