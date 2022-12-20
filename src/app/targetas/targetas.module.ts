import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TargetasRoutingModule } from './targetas-routing.module';
import { TargetasComponent } from './targetas/targetas.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ComponentsModule } from '../components/components.module';
import { VerComponent } from './ver/ver.component';


@NgModule({
  declarations: [
    TargetasComponent,
    VerComponent
  ],
  exports: [
    TargetasComponent
  ],
  imports: [
    CommonModule,
    TargetasRoutingModule,
    FontAwesomeModule,
    ComponentsModule,
  ]
})
export class TargetasModule { }
