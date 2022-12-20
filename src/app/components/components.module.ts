import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { RegistrarSalaComponent } from './registrar-sala/registrar-sala.component';
import { ReactiveFormsModule , FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RegistrarSalaComponent
  ],
  exports: [
    RegistrarSalaComponent
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ComponentsModule { }
