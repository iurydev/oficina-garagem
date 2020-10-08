import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeDashboardRoutingModule } from './home-dashboard-routing.module';
import { HomeDashboardComponent } from './home-dashboard.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { ServicosComponent } from './servicos/servicos.component';
import { EquipeComponent } from './equipe/equipe.component';
import { ClienteComponent } from './cliente/cliente.component';


@NgModule({
  declarations: [
    HomeDashboardComponent,
    ProdutosComponent,
    ServicosComponent,
    EquipeComponent,
    ClienteComponent,
  ],
  imports: [
    CommonModule,
    HomeDashboardRoutingModule
  ],
  exports: [
    HomeDashboardComponent,
  ]
})
export class HomeDashboardModule { }
