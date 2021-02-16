import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UsuariosService } from './services/usuarios.service';
import { AgenciasService } from './services/agencias.service';
import { ReclamosService } from './services/reclamos.service'
import { UsuariosListComponent } from './component/usuarios/usuarios-list/usuarios-list.component';
import { UsuariosFormComponent } from './component/usuarios/usuarios-form/usuarios-form.component';
import { NavegationHeaderComponent } from './component/navegation-header/navegation-header.component';
import { AgenciasListComponent } from './component/agencias/agencias-list/agencias-list.component';
import { FilterPipe } from './component/agencias/pipes/filter.pipe';
import { FilterPipeReclamo } from './component/reclamos/pipes/filter.pipe';
import { LoginComponent } from './component/login/login.component';
import { ReclamosListComponent } from './component/reclamos/reclamos-list/reclamos-list.component';
import { ReclamosFormComponent } from './component/reclamos/reclamos-form/reclamos-form.component';



@NgModule({
  declarations: [
    AppComponent,
    UsuariosListComponent,
    UsuariosFormComponent,
    NavegationHeaderComponent,
    AgenciasListComponent,
    FilterPipe,
    FilterPipeReclamo,
    LoginComponent,
    ReclamosListComponent,
    ReclamosFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
  UsuariosService,
  AgenciasService,
  ReclamosService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
