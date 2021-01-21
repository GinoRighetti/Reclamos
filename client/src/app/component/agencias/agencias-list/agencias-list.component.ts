import { Component, HostBinding, OnInit } from '@angular/core';
import { Agencia } from 'src/app/models/agencias';
import { AgenciasService } from '../../../services/agencias.service';

@Component({
  selector: 'app-agencias-list',
  templateUrl: './agencias-list.component.html',
  styleUrls: ['./agencias-list.component.css']
})
export class AgenciasListComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  agencias: any = [];
  seleccionada: any = [];

  constructor( private agenciasService: AgenciasService) { }

  ngOnInit(): void {
    this.actualizar()
  }

  actualizar(){
    this.agenciasService.getAgencias().subscribe(
      res => this.agencias = res,
      err => console.error(err)
    );
  }

  seleccion(id: string){
    this.agenciasService.getAgencia(id).subscribe(
      res=> this.seleccionada = (res),
      err => console.error(err)
    )
  }
}
