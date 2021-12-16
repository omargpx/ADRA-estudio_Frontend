import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import * as AOS from 'aos';

@Component({
  selector: 'app-porta-socia',
  templateUrl: './porta-socia.component.html',
  styleUrls: ['./porta-socia.component.css']
})
export class PortaSociaComponent implements OnInit {
  @ViewChild('menu') navMenu: ElementRef;
  constructor(private router:Router) { }

  ngOnInit(): void {
    AOS.init();
    //barra animation
    let ubicacionPrincipal = window.pageYOffset;

    window.addEventListener('scroll', function () {
      let dezplazamientoActual = window.pageYOffset;
      if(ubicacionPrincipal <=50){
        document.getElementsByTagName('nav')[0].style.boxShadow = '0px 2px 4px rgba(0, 0, 0, 0.25)';
      }else if (ubicacionPrincipal >= dezplazamientoActual) {
        document.getElementsByTagName('nav')[0].style.top = '0px';
        document.getElementsByTagName('nav')[0].style.boxShadow = '0px 10px 8px -1px rgba(201, 201, 201, 0.25)';
      } else {
        document.getElementsByTagName('nav')[0].style.top = '-100px';
        document.getElementsByTagName('nav')[0].style.boxShadow = 'none';
      }
      ubicacionPrincipal = dezplazamientoActual;
    });
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
  openAsesoria():void{
    this.router.navigate(['asesoria']);
  }
  openCapacitaciones():void{
    this.router.navigate(['capacitacion']);
  }
  bootcamp():void{
    this.router.navigate(['sesion'])
  }
}
