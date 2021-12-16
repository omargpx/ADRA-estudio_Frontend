import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Capacitacion } from '../Models/Capacitacion';
import { IResponse } from '../Models/IResppnse';

@Injectable({
  providedIn: 'root'
})
export class CapacitacionService {

  apiURL = 'http://localhost:8080/api/capacitacion';
  constructor(private httpC:HttpClient) { }

  public listar(){
    return this.httpC.get<Capacitacion[]>(this.apiURL);
  }

  public guardar(data: Capacitacion){
    return this.httpC.post<Capacitacion[]>(this.apiURL, data);
  }
  public modificar(id: string, data: any): Observable<IResponse> {
    return this.httpC.put<IResponse>(`${this.apiURL}/${id}`, data); 
  }
  public eliminar(id: string){
    return this.httpC.delete<Capacitacion>(`${this.apiURL}/${id}`);
  }
}
