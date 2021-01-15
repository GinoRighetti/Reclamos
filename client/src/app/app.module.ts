import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegationComponent } from './component/navegation/navegation.component';

import { UsuariosService } from './services/usuarios.service';
import { UsuariosListComponent } from './component/usuarios/usuarios-list/usuarios-list.component';
import { UsuariosFormComponent } from './component/usuarios/usuarios-form/usuarios-form.component';


@NgModule({
  declarations: [
    AppComponent,
    NavegationComponent,
    UsuariosListComponent,
    UsuariosFormComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
  UsuariosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

