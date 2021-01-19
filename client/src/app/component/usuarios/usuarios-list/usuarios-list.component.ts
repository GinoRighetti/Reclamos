import { Component, HostBinding, OnInit } from '@angular/core';
import { UsuariosService } from '../../../services/usuarios.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-usuarios-list',
  templateUrl: './usuarios-list.component.html',
  styleUrls: ['./usuarios-list.component.css']
})
export class UsuariosListComponent implements OnInit {

  @HostBinding('class') classes = 'row';
  
  usuarios: any  = [] ;
  constructor( private usuariosService: UsuariosService, private router: Router) { }

  ngOnInit() {
    this.actualizar();
  }
  actualizar(){
    this.usuariosService.getUsuarios().subscribe(
      res => this.usuarios = res,
      err => console.error(err)
    );
  }

  borrarUsuario(id: string){
    this.usuariosService.deleteUsuario(id).subscribe(
      res => console.log(res),
      err => console.error(err)
    )
    this.actualizar();
  }
}
