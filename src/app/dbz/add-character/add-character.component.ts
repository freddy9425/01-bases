import {Component, EventEmitter, Input, Output} from '@angular/core';

import {Character} from "../interfaces/dbz.interfaces";

import {DbzService} from "../services/dbz.service";

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html'
})
export class AddCharacterComponent {

  @Input() characterInputBox: Character={
    name: '',
    power:0
  };

  constructor(private dbzservice: DbzService) {
  }

  //En el parentesis se puede agregar el nombre de lo propiedad, por defecto será el nombre del evento, en este caso onNewCharacter
  // @Output() onNewCharacter : EventEmitter<Character> = new EventEmitter();
  add(){

    //add( event: any ){
    // Prevee el comportamiento por defecto que tiene el submit de un formualario
    //event.preventDefault();
    //.trim borra los espacios en blanco y sí es igual a cero entonce sale de la función
    if(this.characterInputBox.name.trim().length === 0){return;}

    //se emite el personaje
    // this.onNewCharacter.emit( this.characterInputBox)

  this.dbzservice.addCharacter(this.characterInputBox);

    this.characterInputBox = {
      name : '',
      power : 0
    }

  }

  // changeName(event: any){
  //   // console.log(event.target.value);
  //   console.log(event.target.value);
  // }

}
