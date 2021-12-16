import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import * as AOS from 'aos';
import { IResponse } from 'src/app/Models/IResppnse';
import { Persona } from 'src/app/Models/Persona';
import { Rol } from 'src/app/Models/Rol';
import { UsuarioService } from 'src/app/Service/usuario.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  socia: boolean = false;
  asesor: boolean = false;
  admin: boolean = false;

  usuarioSesion: Rol[];
  ids: any[];
  persona: Persona;
  response: IResponse;

  id: number;
  idTwo: number;
  idTre: number;
  constructor(
    private serviceUsu: UsuarioService,
    private router: Router,
    private render: Renderer2
  ) {}

  ngOnInit(): void {
    this.getRoles();
    AOS.init();
    this.getDatosUsuario();
    this.tipoRol();
  }

  getRoles() {
    let roles = JSON.parse(localStorage.getItem('roles') || '{}'); //TODO: arreglar
    this.usuarioSesion = roles;
    console.log(this.usuarioSesion.length);
    this.id = this.usuarioSesion[0]?.id_rol;
    this.idTwo = this.usuarioSesion[1]?.id_rol;
    this.idTre = this.usuarioSesion[2]?.id_rol;
  }

  cerrarSesion() {
    sessionStorage.clear();
    this.router.navigate(['landingPage']);

    history.pushState(null, 'null', 'no-back-button');
    window.addEventListener('popstate', function (event) {
      history.pushState(null, 'null', 'no-back-button');
    });
  }

  tipoRol(): void {
    if (this.idTre != undefined) {
      this.asesor = true;
      this.socia = true;
      this.admin = true;
    } else if (this.idTwo != undefined) {
      if(this.id==1){
        this.admin = true;
        if(this.idTwo==2){
          this.asesor = true;
        }else{
          this.socia = true;
        }
      }else{
        this.asesor = true;
        this.socia = true;
      }
    } else if (this.id != undefined) {
      if (this.id == 3) {
        this.socia = true;
      } else if (this.id == 2) {
        this.asesor = true;
      } else {
        this.admin = true;
      }
    }
  }

  getDatosUsuario(): void {
    let dni = Number(sessionStorage.getItem('dni'));
    this.serviceUsu.getDataPersonaByDni(dni).subscribe((Response) => {
      this.response = Response;
      let a = Object.values(this.response);
      this.persona = a[0];
      console.log(this.persona);
    });
  }

  portalADM() {
    this.router.navigate(['portal-administrador']);
  }
  portalAsesor() {
    this.router.navigate(['portal-asesor']);
  }
  portalSocia() {
    this.router.navigate(['portal-socia']);
  }
}
