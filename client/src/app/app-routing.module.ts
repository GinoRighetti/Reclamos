import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuariosFormComponent } from './component/usuarios/usuarios-form/usuarios-form.component';
import { UsuariosListComponent } from './component/usuarios/usuarios-list/usuarios-list.component';
import { UsuariosMenuComponent } from './component/usuarios/usuarios-menu/usuarios-menu.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
