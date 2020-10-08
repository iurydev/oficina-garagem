import { HomeDashboardComponent } from './home-dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProdutosComponent } from './produtos/produtos.component';
import { ServicosComponent } from './servicos/servicos.component';
import { EquipeComponent } from './equipe/equipe.component';
import { ClienteComponent } from './cliente/cliente.component';


const routes: Routes = [
  {
    path: '',
    component: HomeDashboardComponent,
    children: [{
      path: 'produtos',
      component: ProdutosComponent,
    },
  {
    path: 'servicos',
    component: ServicosComponent,
  },
  {
    path: 'equipe',
    component: EquipeComponent,
  },
  {
    path: 'cliente',
    component: ClienteComponent,
  }
]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeDashboardRoutingModule { }
