import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Agencia} from '../models/agencias';

@Injectable({
  providedIn: 'root'
})
export class AgenciasService {
  API_URI = 'http://localhost:3000/agencias';
  constructor(private http: HttpClient) { }

  getUsuarios(){
    return this.http.get(`${this.API_URI}`);
  }

  getUsuario(id: string) {
    return this.http.get(`${this.API_URI}/${id}`);
  }
}
