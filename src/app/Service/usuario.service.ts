import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../Models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http:HttpClient) { }

  Url='http://localhost:8080/api/usuario';

  getUsuarios(){
    return this.http.get<Usuario[]>(this.Url);
  }
}
