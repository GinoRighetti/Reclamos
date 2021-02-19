import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { Solucion } from '../models/soluciones';

@Injectable({
  providedIn: 'root'
})
export class SolucionesService {
  API_URI = 'http://localhost:3000/soluciones';
  constructor(private http: HttpClient) { }

  getSoluciones(){
    return this.http.get(`${this.API_URI}`);
  }

  getSolucion(id: string) {
    return this.http.get(`${this.API_URI}/${id}`);
  }

  createSoluciones (solucion: Solucion){
    return this.http.post(`${this.API_URI}`,solucion);
  }

  createId(solucion: Solucion){
    return this.http.post(`${this.API_URI}/nuevo/`,'');
  }

  getMaxId(){
    return this.http.get(`${this.API_URI}maxid`);
  }

  deleteSolucion(id: string) {
    return this.http.delete(`${this.API_URI}/${id}`);
  }

  updateSolucion (id: string, updateSolucion: Solucion){
    return this.http.put(`${this.API_URI}/${id}`, updateSolucion);
  }

}