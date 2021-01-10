import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministradorRoutingModule } from './administrativo-routing.module';
import { HomeAdministrativoComponent } from './home-administrativo/home-administrativo.component';
import { LoginAdministrativoComponent } from './login-administrativo/login-administrativo.component';
import { RelatorioGeralComponent } from './home-administrativo/relatorio-geral/relatorio-geral.component';
import { ServicosAdmComponent } from './home-administrativo/servicos-adm/servicos-adm.component';




@NgModule({
  declarations: [
    HomeAdministrativoComponent,
     LoginAdministrativoComponent,
       RelatorioGeralComponent,
       ServicosAdmComponent,
      ],
  imports: [
    CommonModule,
    AdministradorRoutingModule,
    SharedModule,
  ]
})
export class AdministrativoModule { }
