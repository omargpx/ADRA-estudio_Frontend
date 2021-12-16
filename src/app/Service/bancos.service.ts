import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Banquitos } from '../Models/Banquitos';

@Injectable({
  providedIn: 'root'
})
export class BancosService {

  Url='http://localhost:8080/api/bancoComunal';

  constructor(private http:HttpClient) { }

  getBanquitos(){
    return this.http.get<Banquitos[]>(this.Url);
  }
}
