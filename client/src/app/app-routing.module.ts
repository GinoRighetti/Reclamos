import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuariosFormComponent } from './component/usuarios/usuarios-form/usuarios-form.component';
import { UsuariosListComponent } from './component/usuarios/usuarios-list/usuarios-list.component';
import { AgenciasListComponent } from './component/agencias/agencias-list/agencias-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/menu',
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
