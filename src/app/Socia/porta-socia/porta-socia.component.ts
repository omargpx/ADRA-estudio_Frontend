import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-porta-socia',
  templateUrl: './porta-socia.component.html',
  styleUrls: ['./porta-socia.component.css']
})
export class PortaSociaComponent implements OnInit {

  constructor() { }

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
  

}
