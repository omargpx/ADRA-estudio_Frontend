import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-matinal',
  templateUrl: './matinal.component.html',
  styleUrls: ['./matinal.component.css']
})
export class MatinalComponent implements OnInit {
  @ViewChild('loadMatinal') matinal: ElementRef;

  constructor(private render:Renderer2) { }

  ngOnInit(): void {
    AOS.init();
  }

  cargarMatinal(tipo: number): void {
    let matutina = this.matinal.nativeElement;
    switch(tipo){
      case 1: this.render.setAttribute(matutina,"src","https://devocionmatutina.com");
        break;
      case 2: this.render.setAttribute(matutina,"src","https://devocionmatutina.com/category/matutinas-diarias/devocion-matutina-2021/matutina-damas-2021/");
        break;
      case 3: this.render.setAttribute(matutina,"src","https://devocionmatutina.com/category/matutinas-diarias/devocion-matutina-2021/matutina-jovenes-2021/");
        break;
    }
  }
}
