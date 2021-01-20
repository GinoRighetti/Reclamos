import { Component, HostBinding, OnInit } from '@angular/core';
import { AgenciasService } from '../../../services/agencias.service';

@Component({
  selector: 'app-agencias-list',
  templateUrl: './agencias-list.component.html',
  styleUrls: ['./agencias-list.component.css']
})
export class AgenciasListComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  agencias: any = [];

  constructor( private agenciasService: AgenciasService) { }

  ngOnInit(): void {
    this.actualizar()
  }

  actualizar(){
    this.agenciasService.getAgencias().subscribe(
      res => console.log(res),
      err => console.error(err)
    );
  }
}
