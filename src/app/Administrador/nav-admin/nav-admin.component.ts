import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import * as AOS from 'aos';
import { IResponse } from 'src/app/Models/IResppnse';
import { Persona } from 'src/app/Models/Persona';
import { UsuarioService } from 'src/app/Service/usuario.service';

@Component({
  selector: 'app-nav-admin',
  templateUrl: './nav-admin.component.html',
  styleUrls: ['./nav-admin.component.css']
})
export class NavAdminComponent implements OnInit {
  @ViewChild('menu') navMenu: ElementRef;

  persona:Persona;
  response:IResponse;
  constructor(private router:Router,private serviceUsu:UsuarioService) { }

  ngOnInit(): void {
    AOS.init();
    this.getDatosUsuario();
  }

  
  menuActive(): void {
    const mainMenu = this.navMenu.nativeElement;
    mainMenu.classList.add('active-menu');
    mainMenu.classList.remove('close-menu');
  }
  menuClose():void{
    const mainMenu = this.navMenu.nativeElement;
    mainMenu.classList.add('close-menu');
    mainMenu.classList.remove('active-menu');
  }
  cerrarSesion() {
    sessionStorage.clear();
    this.router.navigate(['landingPage']);

    history.pushState(null, "null", 'no-back-button');
    window.addEventListener('popstate', function (event) {
      history.pushState(null, "null", 'no-back-button');
    });
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

}
