import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent {

  heroes: string [] = ['SpiderMan','Ironman','Hulk','Thor','Captain America'];
  tempHero: string = '';


  deleteHero(): void {

    console.log("Erasing...")

    let length: number = (this.heroes.length - 1);
    this.tempHero = this.heroes[length];

    this.heroes.splice(length,1);
    // this.heroes.pop(); Elimina el último elemento

    console.log('Removal Complete');
    console.log('Aquí hay: '+ this.heroes[length]);
    console.log('El tamaño es: '+ this.heroes.length);
  }

}
