import {Injectable} from "@angular/core";

import {Character} from "../interfaces/dbz.interfaces";

@Injectable()
export class DbzService {

  private _characters: Character[]=[
    {
      name: 'Goku',
      power: 15000
    },
    {
      name: 'Vegeta',
      power: 8500
    }
  ];

  get characters(): Character[] {
    //Los objetos son envíados por referencia.Al indicarlos entre corchetes cuadrados
    //se indica que es un arreglo y el operador spread separa cada uno de los elementos independientes del arreglo y crea
    //uno nuevo. Esto no es obligatorio más es una buena practica para que no se envíe por referencia.
    return [...this._characters];
  }
  constructor() {}

  addCharacter(character: Character){
    this._characters.push(character);
  }

}
