import { Component, HostBinding, OnInit } from '@angular/core';
import { ReclamosService } from '../../../services/reclamos.service'

@Component({
  selector: 'app-reclamos-list',
  templateUrl: './reclamos-list.component.html',
  styleUrls: ['./reclamos-list.component.css']
})
export class ReclamosListComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  reclamos: any = [];
  seleccionado: any = [];
  

  constructor(private reclamosService: ReclamosService) { }

  ngOnInit(): void {
    this.actualizar()
  }
  
  filtertj = '';
  
  actualizar(){
    this.reclamosService.getReclamos().subscribe(
      res => this.reclamos = res,
      err => console.error(err)
    );
  }
  
  seleccion(id: string){
    this.reclamosService.getReclamo(id).subscribe(
      res=> this.seleccionado = (res),
      err => console.error(err)
    )
  }

}
