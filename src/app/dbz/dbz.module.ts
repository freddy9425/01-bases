import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";

import { MainPageComponent } from './main-page/main-page.component';
import { CharactersComponent } from './characters/characters.component';
import { AddCharacterComponent } from './add-character/add-character.component';
import {DbzService} from "./services/dbz.service";




@NgModule({
  declarations: [
    MainPageComponent,
    CharactersComponent,
    AddCharacterComponent
  ],
  exports: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  //Son los servicios
  providers: [
    //Se ejecutan como una unica isntancia a lo largo de todo el módulo
    DbzService
  ]
})
export class DbzModule { }
