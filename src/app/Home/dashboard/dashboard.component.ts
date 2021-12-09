import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { IResponse } from 'src/app/Models/IResppnse';
import { usuario } from 'src/app/Models/Usuario';
import { UsuarioService } from 'src/app/Service/usuario.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  public cardADM = false;

  usuarioSesion: any[];
  pruebaData:usuario[];
  constructor(private serviceUsu: UsuarioService) {}

  ngOnInit(): void {
    this.getRoles();
    //this.visibilidad('#admin-card', false);
    this.cardADM = true;
    AOS.init();
  }
  public visibilidad(selector: any, visible: boolean) {
    var elemento = document.querySelector(selector);
    if (elemento != null) {
      elemento.style.display = visible ? 'block' : 'none';
    }
  }

  getRoles() {
    var dni = Number(sessionStorage.getItem('dni'));
    this.serviceUsu.getUsuarioByEmail(dni).subscribe((Response) => {
      this.usuarioSesion = Array(JSON.stringify(Response.data));
      console.log(Response.success+" data: "+Array(JSON.stringify(Response.data)));
      this.pruebaData=Response.data;
      console.log(this.pruebaData)
    });
  }

  cerrarSesion() {
    sessionStorage.clear();
  }
}
