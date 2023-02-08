import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {CounterComponent} from "./counters/counter.component";
import {HeroeComponent} from "./heroes/heroe/heroe.component";
import { ListComponent } from './heroes/list/list.component';

@NgModule({
  // Usualmente aquí se deben colocar componentes
  declarations: [
    AppComponent,
    CounterComponent,
    HeroeComponent,
    ListComponent
  ],
  // usualmente aquí se deben colocar otro módulos
  imports: [
    BrowserModule
  ],
  // Son más o menos como servicios específicos a un módulo
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
