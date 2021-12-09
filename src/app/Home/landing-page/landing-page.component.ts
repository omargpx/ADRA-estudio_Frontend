import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as AOS from 'aos';
import { usuario } from 'src/app/Models/Usuario';
import { UsuarioService } from 'src/app/Service/usuario.service';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import { ModalComponent } from '../modal/modal.component';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent implements OnInit {
  title = 'ADRA estudio';

  usuarios: usuario[];
  constructor(private serviceUsu:UsuarioService, private router:Router,
    private modalService:NgbModal) {}

  ngOnInit(): void {
    this.getUsuarios();
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
  getUsuarios(): void {
    this.serviceUsu.getUsuarios()
    .subscribe(Response=>{this.usuarios=Response;})
  }

  logIn(){
    this.router.navigate(["login"]);
    /*const modal = this.modalService.open(ModalComponent, {
      size: "lg",
      keyboard: false,
      backdrop: 'static'
    });
    modal.componentInstance.title = "Ingresar"; console.log(this.getUsuarios())*/
    console.log(this.usuarios)
  }

  donar(){
    window.location.href = "https://www.adra.org.pe/donaciones/";
  }


}
