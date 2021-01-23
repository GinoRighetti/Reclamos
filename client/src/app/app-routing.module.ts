import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuariosFormComponent } from './component/usuarios/usuarios-form/usuarios-form.component';
import { UsuariosListComponent } from './component/usuarios/usuarios-list/usuarios-list.component';
import { AgenciasListComponent } from './component/agencias/agencias-list/agencias-list.component';
import { LoginComponent } from './component/login/login.component';
import { ReclamosListComponent } from './component/reclamos/reclamos-list/reclamos-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/acceso',
    pathMatch: 'full'
  },
  {
    path: 'usuarios',
    component: UsuariosListComponent
  },
  {
    path: 'usuarios/nuevo',
    component: UsuariosFormComponent
  },
  {
    path: 'usuarios/editar/:id',
    component: UsuariosFormComponent
  },
  {
    path: 'agencias',
    component: AgenciasListComponent 
  },
  {
    path: 'acceso',
    component: LoginComponent 
  },
  {
    path: 'reclamos',
    component: ReclamosListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
