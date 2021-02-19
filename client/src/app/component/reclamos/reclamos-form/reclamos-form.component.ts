import { Component, HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {} from '../../../app.component';

import { SolucionesService } from "../../../services/soluciones.service"
import { ReclamosService } from "../../../services/reclamos.service";

@Component({
  selector: 'app-reclamos-form',
  templateUrl: './reclamos-form.component.html',
  styleUrls: ['./reclamos-form.component.css']
})
export class ReclamosFormComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  
  reclamo: any ={
    N_reclamo: 0,
    F_reclamo: new Date,
    Contacto: "",
    Metodo_Contacto: "",
    Tj: "",
    Problema: "",
    Observaciones: "",
    Id_u_r: "",
    U_reclamo: "",
    Estado: "",
    N_solucion: "",
    F_solucion: new Date,
    Solucion: "",
    Derivacion: "",
    Id_u_s: "",
    U_solucion: ""
  };

  solucion:any={
    Id : 0,
    Id_reclamo : this.reclamo.N_reclamo,
    Fecha: new Date,
    Solucion: "",
    Id_usuario: 0,
    Derivacion: ""
  }
  
  editar : boolean = false;
  mostrar_derivacion: boolean = false;
 

  constructor(private reclamoService: ReclamosService, private solucionesService: SolucionesService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if (params.id){
      this.reclamoService.getReclamo(params.id).subscribe(
        res => {this.reclamo = res;
                this.editar = true;
                },
        err => console.error(err)
      )
    }else{
      /*this.reclamoService.createId(this.reclamo).subscribe(
        res => console.log(res) ,
        err => console.error(err)
      );*/
      this.reclamoService.getMaxId().subscribe(
        res => {this.reclamo = res; 
                this.reclamo.F_reclamo = new Date;
                this.reclamo.F_solucion = new Date;                          
        }, 
        err => console.error(err))
    }
  }


  actualizarReclamo(){
    
    if (this.reclamo.Tj=='' || this.reclamo.Contacto=='' || this.reclamo.Metodo=='' || this.reclamo.Motivo=='' || this.reclamo.Problema=='')
    {
         alert("Debe completar todos los campos requeridos");
    }
    else{
      this.reclamoService.updateReclamo(this.reclamo.N_reclamo,this.reclamo).subscribe(
        res => {console.log(res);
                if (this.reclamo.Solucion!=''){
                    this.solucion.Id  
                    this.solucion.Solucion 
                    this.solucion.Id_reclamo = this.reclamo.N_reclamo;
                    this.solucion.Fecha = this.reclamo.F_solucion;
                    this.solucion.Solucion = this.reclamo.Solucion;
                    this.solucion.Id_usuario = this.reclamo.Id_u_s;
                    this.solucion.Derivacion = this.reclamo.Derivacion;
                    this.solucionesService.updateSolucion(this.solucion.Id,this.solucion).subscribe(
                      res => console.log(res),
                      err => console.error(err)
                    )
                };
                this.router.navigate(['/reclamos'])},
        err => console.error(err)
      )
    }
  }


}
