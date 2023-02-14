import { Component } from '@angular/core';

import { Character } from "../interfaces/dbz.interfaces";

import {DbzService} from "../services/dbz.service";



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

  // characters: Character[] = [];

  characterInputBox: Character={
    name: 'Roshi',
    power:1000
  }


  // get characters():Character[]{
  //   return this.dbzService.characters;
  // }

  // addNewCharacter(character : Character){
  //   this.characters.push(character);
  // }

  //Definiendo de forma corta la propiedad dbzService es conocido como inyección de dependencias
  // constructor(private dbzService: DbzService) {
  //   // this.characters = this.dbzService.characters;
  // }

}
