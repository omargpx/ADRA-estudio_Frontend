import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IResponse } from '../Models/IResppnse';
import { Observable } from 'rxjs';
import { usuario } from '../Models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http:HttpClient) { }

  Url='http://localhost:8080/api/usuario/';

  personaService='http://localhost:8080/api/persona/';

  getUsuarios(){
    return this.http.get<usuario[]>(this.Url);
  }

  getUsuarioByEmail(email: number): Observable<IResponse>{
    return this.http.get<IResponse>(`${this.Url}/${email}`);
  }
  getDataPersonaByDni(dni:number): Observable <IResponse>{
    return this.http.get<IResponse>(`${this.personaService}/${dni}`);
  }
}
