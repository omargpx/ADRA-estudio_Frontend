import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pedido } from '../Models/Pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  constructor(private http:HttpClient) { }

  Url='http://localhost:8080/api/pedidos';

  guardarPedido(data:Pedido){
    return this.http.post<Pedido[]>(this.Url, data);
  }

}
