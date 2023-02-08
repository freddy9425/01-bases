import {Component} from "@angular/core";


@Component({
  // app indica que es personalizado seguido por el nombre del componente sin la palabra component
  selector: 'app-heroe',
  // el template hace referencial al html correspondiente al componente
  templateUrl: 'heroe.component.html'
})
export class HeroeComponent{
  name: string = 'IronMan';
  age : number = 45;

  get nameCapitalized(): string{
    return this.name.toUpperCase();
  }

  getName():string {
    return `${ this.name } - ${ this.age } years old`;
    //Sería lo mismo que lo siguiente pero el anterior permite insertar templates de un String
    //return this.name + ' - ' +this.age;
  }

  changeName (): void {

    this.name = 'SpiderMan';

  }
  changeAge():void {

    this.age = 30;

  }

}
