import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RoleUsu } from '../Models/RoleUsu';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private http:HttpClient) { }

  Url='http://localhost:8080/api/rolUsuario';

  getRolUsuario(){
    return this.http.get<RoleUsu[]>(this.Url);
  }
  asignarRolUsuario(data:RoleUsu){
    return this.http.post<RoleUsu[]>(this.Url, data);
  }
}
