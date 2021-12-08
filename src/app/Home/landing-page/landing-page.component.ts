import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as AOS from 'aos';
import { Usuario } from 'src/app/Models/Usuario';
import { UsuarioService } from 'src/app/Service/usuario.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent implements OnInit {
  title = 'ADRA estudio';

  usuarios:Usuario[];
  constructor(private serviceUsu:UsuarioService, private router:Router) {}

  ngOnInit(): void {
    this.serviceUsu.getUsuarios()
    .subscribe(data=>{this.usuarios=data;})
    //animaciones
    AOS.init();
    //barra animation
    let ubicacionPrincipal = window.pageYOffset;

    window.addEventListener('scroll', function () {
      let dezplazamientoActual = window.pageYOffset;
      if(ubicacionPrincipal <=50){
        document.getElementsByTagName('nav')[0].style.boxShadow = 'none';
      }else if (ubicacionPrincipal >= dezplazamientoActual) {
        document.getElementsByTagName('nav')[0].style.top = '0px';
        document.getElementsByTagName('nav')[0].style.boxShadow = '0px 10px 8px -1px rgba(201, 201, 201, 0.25)';
      } else {
        document.getElementsByTagName('nav')[0].style.top = '-100px';
        document.getElementsByTagName('nav')[0].style.boxShadow = '0px 2px 4px rgba(0, 0, 0, 0.25)';
      }
      ubicacionPrincipal = dezplazamientoActual;
    });

  }

  donar(){
    window.location.href = "https://www.adra.org.pe/donaciones/";
  }

  

}
