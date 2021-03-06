import { Component, HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { UsuariosService } from "../../../services/usuarios.service";

@Component({
  selector: 'app-usuarios-form',
  templateUrl: './usuarios-form.component.html',
  styleUrls: ['./usuarios-form.component.css']
})
export class UsuariosFormComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  imagenSeleccionada: number=0;

  imagenes= [
    {id: 0, texto: "../../../../assets/img-usuario/1.png"},
    {id: 1, texto: '../../../../assets/img-usuario/2.png'},
    {id: 2, texto: '../../../../assets/img-usuario/3.png'},
    {id: 3, texto: '../../../../assets/img-usuario/4.png'},
    {id: 4, texto: '../../../../assets/img-usuario/5.png'},
    {id: 5, texto: '../../../../assets/img-usuario/6.png'},
    {id: 6, texto: '../../../../assets/img-usuario/7.png'},
    {id: 7, texto: '../../../../assets/img-usuario/8.png'},
    {id: 8, texto: '../../../../assets/img-usuario/9.png'},
    {id: 9, texto: '../../../../assets/img-usuario/10.png'},
  ]

  user: any ={
    id: 0,
    Nombre: "",
    Apellido: "",
    Email: "",
    Usuario: "",
    Clave: "",
    Imagen: "../../../../assets/img-usuario/1.png",
    Alta: new Date,
    Baja: new Date,
    Condicion: 0
  };

  editar: boolean = false;

  constructor(private usuariosService: UsuariosService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if (params.id){
      this.usuariosService.getUsuario(params.id).subscribe(
        res => {this.user = res; this.editar = true},
        err => console.error(err)
      )
    }
  }

  guardarUsuario(){
    delete this.user.Baja;
    delete this.user.Alta;
    delete this.user.id;
    this.user.Nombre = (this.user.Nombre).toUpperCase();
    this.user.Apellido = (this.user.Apellido).toUpperCase();
    if (this.user.Nombre=='' || this.user.Apellido=='' || this.user.Usuario=='' || this.user.Clave=='')
    {
      alert("Debe completar todos los campos requeridos");
    }
    else{
      this.usuariosService.createUsuario(this.user).subscribe(
        res => {console.log(res), 
                this.router.navigate(['/usuarios'])},
        err => console.error(err)
      )
    }
  }

  actualizarUsuario(){
    delete this.user.Baja;
    delete this.user.Alta;
    this.usuariosService.updateUsuario(this.user.Id, this.user).subscribe(
      res => {console.log(res), 
        this.router.navigate(['/usuarios'])},
      err => console.error(err)
    )
  }

  imgsiguiente(){
    if (this.imagenSeleccionada != 9){
      this.imagenSeleccionada = this.imagenSeleccionada + 1;
    }else{
      this.imagenSeleccionada = 0;
    } 
    this.user.Imagen= this.imagenes[this.imagenSeleccionada].texto;
  }

  imganterior(){
    if (this.imagenSeleccionada != 0){
      this.imagenSeleccionada = this.imagenSeleccionada - 1;
    }else{
      this.imagenSeleccionada = 9;
    } 
    this.user.Imagen= this.imagenes[this.imagenSeleccionada].texto;
  }
}
