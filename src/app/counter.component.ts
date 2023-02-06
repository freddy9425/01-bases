import { Component} from '@angular/core';

@Component({
  //se nombra el selector
  selector: 'app-counter',
  template: `

    <!—Se imprime el texto exportado por la clase appComponent del app.compoent.ts —>
    <h1>{{title1}}</h1>
    <h3>La base es:<strong>{{ base }}</strong></h3>

    <!—Dentro de doble corchete se escribe la propiedad de la clase —>
    <!—Los eventos se definen con parentesis —>
    <!--<button (click)="number = number + 1; "> +1</button>-->
    <button (click)="accumulate(base); "> + {{base}}</button>

    <span> {{number}} </span>

    <button (click)="accumulate(-base); "> - {{base}}</button>

  `
})
export class CounterComponent {

  title1: String = 'Counter App';
  number: number = 10;
  base  : number = 5;

  accumulate(value: number){
    this.number += value;
  }
}
