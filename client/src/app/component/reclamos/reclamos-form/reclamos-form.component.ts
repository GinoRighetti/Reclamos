import { Component, HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReclamosService } from "../../../services/reclamos.service";

@Component({
  selector: 'app-reclamos-form',
  templateUrl: './reclamos-form.component.html',
  styleUrls: ['./reclamos-form.component.css']
})
export class ReclamosFormComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  reclamo: any = [];
  
  editar : boolean = false;

  constructor(private reclamoService: ReclamosService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if (params.id){
      this.reclamoService.getReclamo(params.id).subscribe(
        res => {this.reclamo = res; this.editar = true},
        err => console.error(err)
      )
    }
  }

  guardarReclamo(){
    delete this.reclamo.id;
    //this.user.Nombre = (this.user.Nombre).toUpperCase();
    //this.user.Apellido = (this.user.Apellido).toUpperCase();
    //if (this.user.Nombre=='' || this.user.Apellido=='' || this.user.Usuario=='' || this.user.Clave=='')
    //{
    //  alert("Debe completar todos los campos requeridos");
    //}
    //else{
      this.reclamoService.createReclamo(this.reclamo).subscribe(
        res => {console.log(res), 
                this.router.navigate(['/reclamos'])},
        err => console.error(err)
      )
    //}
  }

  actualizarReclamo(){
  }

}
