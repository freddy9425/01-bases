import { NgModule } from '@angular/core';
import {HeroeComponent} from "./heroe/heroe.component";
import {ListComponent} from "./list/list.component";
import {CommonModule} from "@angular/common";


@NgModule({
  // Indican que cosas contiene el componente, como componentes, files, etc...
  declarations: [
    HeroeComponent,
    ListComponent
  ],
   // Que cosas quiero que sean visibles fuera del módulo todo lo definido en las declaraciones será
   // invisible para todo la aplicacion excepto los componentes definidos en las declaraciones del módulo.
  exports:[
    ListComponent
  ],
  //Aquí dentro sólo van módulos
  imports:[
    CommonModule
  ]
})
export class HeroesModule{

}
