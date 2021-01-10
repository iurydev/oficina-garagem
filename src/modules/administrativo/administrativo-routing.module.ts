import { ServicosAdmComponent } from './home-administrativo/servicos-adm/servicos-adm.component';
import { ServicosComponent } from './../home-dashboard/servicos/servicos.component';
import { HomeAdministrativoComponent } from "./home-administrativo/home-administrativo.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginAdministrativoComponent } from "./login-administrativo/login-administrativo.component";
import { RelatorioGeralComponent } from "./home-administrativo/relatorio-geral/relatorio-geral.component";

const routes: Routes = [
  {
    path: "",
    component: LoginAdministrativoComponent,
  },
  {
    path: "home",
    component: HomeAdministrativoComponent,
    children: [
      { path: 'servicos', component: ServicosAdmComponent},
      { path: 'relatorio-geral', component: RelatorioGeralComponent }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdministradorRoutingModule {}
