import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent {

  heroes: string [] = ['SpiderMan','Ironman','Hulk','Thor'];

}
