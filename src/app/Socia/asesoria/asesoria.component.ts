import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import * as AOS from 'aos';

@Component({
  selector: 'app-asesoria',
  templateUrl: './asesoria.component.html',
  styleUrls: ['./asesoria.component.css'],
})
export class AsesoriaComponent implements OnInit {

  constructor(private router: Router,private render:Renderer2) {}

  ngOnInit(): void {
    AOS.init();
  }

  cerrarSesion() {
    sessionStorage.clear();
    this.router.navigate(['landingPage']);

    history.pushState(null, 'null', 'no-back-button');
    window.addEventListener('popstate', function (event) {
      history.pushState(null, 'null', 'no-back-button');
    });
  }
}
