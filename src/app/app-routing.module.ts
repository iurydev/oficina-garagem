import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: '../modules/home-dashboard/home-dashboard.module#HomeDashboardModule',

  },
  {
    path: 'administrativo',
    loadChildren: '../modules/administrativo/administrativo.module#AdministrativoModule'

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
