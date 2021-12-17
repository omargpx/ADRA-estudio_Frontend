import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as AOS from 'aos';
import { usuario } from 'src/app/Models/Usuario';
import { UsuarioService } from 'src/app/Service/usuario.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MatDialog } from '@angular/material/dialog';
import { PoVideoComponent } from 'src/app/Components/po-video/po-video.component';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent implements OnInit {
  title = 'ADRA estudio';

  usuarios: usuario[];
  constructor(
    private serviceUsu: UsuarioService,
    private router: Router,
    private dialog:MatDialog
  ) {}

  ngOnInit(): void {
    this.getUsuarios();
    //animaciones
    AOS.init();
    //barra animation
    let ubicacionPrincipal = window.pageYOffset;

    window.addEventListener('scroll', function () {
      let dezplazamientoActual = window.pageYOffset;
      if (ubicacionPrincipal <= 50) {
        document.getElementsByTagName('nav')[0].style.boxShadow = 'none';
      } else if (ubicacionPrincipal >= dezplazamientoActual) {
        document.getElementsByTagName('nav')[0].style.top = '0px';
        document.getElementsByTagName('nav')[0].style.boxShadow =
          '0px 10px 8px -1px rgba(201, 201, 201, 0.25)';
      } else {
        document.getElementsByTagName('nav')[0].style.top = '-100px';
        document.getElementsByTagName('nav')[0].style.boxShadow =
          '0px 2px 4px rgba(0, 0, 0, 0.25)';
      }
      ubicacionPrincipal = dezplazamientoActual;
    });

  }
  getUsuarios(): void {
    this.serviceUsu.getUsuarios().subscribe((Response) => {
      this.usuarios = Response;
    });
  }

  logIn() {
    this.router.navigate(['login']);
    /*const modal = this.modalService.open(ModalComponent, {
      size: "lg",
      keyboard: false,
      backdrop: 'static'
    });
    modal.componentInstance.title = "Ingresar"; console.log(this.getUsuarios())*/
    console.log(this.usuarios);
  }

  donar() {
    window.location.href = 'https://www.adra.org.pe/donaciones/';
  }
  openPop(N:number){
    console.log(N)
    if(N==1){
      localStorage.setItem('urlVideo','https://www.youtube.com/embed/dlOA3szA8zU');
      this.dialog.open(PoVideoComponent);
    }else if(N==2){
      localStorage.setItem('urlVideo','');
      this.dialog.open(PoVideoComponent);
    }else{
      localStorage.setItem('urlVideo','');
      this.dialog.open(PoVideoComponent);
    }
    
  }
}
