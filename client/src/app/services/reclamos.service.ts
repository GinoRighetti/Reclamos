import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { Reclamo } from '../models/reclamos';

@Injectable({
  providedIn: 'root'
})
export class ReclamosService {
  API_URI = 'http://localhost:3000/reclamos';
  constructor(private http: HttpClient) { }

  getReclamos(){
    return this.http.get(`${this.API_URI}`);
  }

  getReclamo(id: string) {
    return this.http.get(`${this.API_URI}/${id}`);
  }

  createReclamo (reclamo: Reclamo){
    return this.http.post(`${this.API_URI}`,reclamo);
  }

  createId(reclamo: Reclamo){
    return this.http.post(`${this.API_URI}/nuevo`,reclamo);
  }

  deleteReclamo(id: string) {
    return this.http.delete(`${this.API_URI}/${id}`);
  }

  updateReclamo (id: string, updateReclamo: Reclamo){
    return this.http.put(`${this.API_URI}/${id}`, updateReclamo);
  }

}