import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import {HeroesModule} from "./heroes/heroes.module";
import {CountersModule} from "./counters/counters.module";
import {DbzModule} from "./dbz/dbz.module";


@NgModule({
  // Usualmente aquí se deben colocar componentes
  declarations: [
    AppComponent,
  ],
  // usualmente aquí se deben colocar otro módulos
  imports: [
    BrowserModule,
    HeroesModule,
    CountersModule,
    DbzModule
  ],
  // Son más o menos como servicios específicos a un módulo
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
