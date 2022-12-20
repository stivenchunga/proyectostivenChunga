import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'sorteo',
    loadChildren: () => import('./targetas/targetas.module').then(m => m.TargetasModule)
  },
  {
    path: '**',
    redirectTo:'sorteo'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
