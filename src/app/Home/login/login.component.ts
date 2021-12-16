import { Component, ElementRef, OnInit, Query, ViewChild } from '@angular/core';
import * as AOS from 'aos';
import { UsuarioService } from 'src/app/Service/usuario.service';
import { usuario } from 'src/app/Models/Usuario';
import Swal from 'sweetalert2';
import { Rol } from 'src/app/Models/Rol';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  @ViewChild('dni') dni: ElementRef;
  @ViewChild('pswd') pasword: ElementRef;
  usuarios: usuario[];
  constructor(private serviceUsu: UsuarioService, private router:Router) {}

  ngOnInit(): void {
    AOS.init();
    this.getUsuarios();
  }

  getUsuarios(): void {
    this.serviceUsu.getUsuarios().subscribe((Response) => {
      this.usuarios = Response;
    });
  }

  Ingresar(): void {
    const dniV = this.dni.nativeElement; //email
    const contrasena = this.pasword.nativeElement;
    let buscarUsuario = this.usuarios.find(
      (dniMap) => dniMap.email == dniV.value
    );
    if (buscarUsuario == null) {
      Swal.fire('Email invalido', 'error', 'error');
    } else {
      if (contrasena.value != buscarUsuario.clave) {
        Swal.fire('Contraseña Incorrecta', 'error', 'error');
      } else {
        Swal.fire('Bienvenido', 'succes', 'success');
       // let roleUs: Rol[];
        //roleUs = buscarUsuario.roles;
        let dni:number = buscarUsuario.email;
        sessionStorage.setItem('dni', JSON.stringify(dni));
        localStorage.setItem('roles',JSON.stringify(buscarUsuario.roles));
        this.router.navigate(['dashboard'])
      }
    }
  }
}
