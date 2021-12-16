import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from '../Models/Persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(private http:HttpClient) { }

  Url='http://localhost:8080/api/persona';

  getPersonas(){
    return this.http.get<Persona[]>(this.Url);
  }

}
