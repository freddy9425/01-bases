import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //Nombre del componente
  templateUrl: './app.component.html',//contraparte HTML
  //template: '<span>Fernando</span>',
  /*template: `
    <h1>Hello again</h1>
  `,*/
  styleUrls: ['./app.component.css'] //
})
export class AppComponent {
  title: String = 'Contador App';

}
