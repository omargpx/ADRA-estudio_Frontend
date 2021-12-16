import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import * as AOS from 'aos';

@Component({
  selector: 'app-sesiones',
  templateUrl: './sesiones.component.html',
  styleUrls: ['./sesiones.component.css'],
})
export class SesionesComponent implements OnInit {
  @ViewChild('menu') navMenu: ElementRef;

  constructor(private router:Router) {}

  ngOnInit(): void {
    AOS.init();
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
}
