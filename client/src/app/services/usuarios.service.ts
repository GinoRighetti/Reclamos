import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Usuario} from '../models/usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  API_URI = 'http://localhost:3000/usuarios';
  constructor(private http: HttpClient) { }

  getUsuarios(){
    return this.http.get(`${this.API_URI}`);
  }

  getUsuario(id: string) {
    return this.http.get(`${this.API_URI}/${id}`);
  }

  createUsuario (usuario: Usuario){
    return this.http.post(`${this.API_URI}`,usuario);
  }

  deleteUsuario(id: string) {
    return this.http.delete(`${this.API_URI}/${id}`);
  }

  updateUsuario (id: string, updateUsuario: Usuario){
    return this.http.put(`${this.API_URI}/${id}`, updateUsuario);
  }

}
