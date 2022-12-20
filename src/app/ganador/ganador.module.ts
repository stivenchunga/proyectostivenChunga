import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GanadorComponent } from './ganador/ganador.component';



@NgModule({
  declarations: [
    GanadorComponent
  ],
  exports: [
    GanadorComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GanadorModule { }
