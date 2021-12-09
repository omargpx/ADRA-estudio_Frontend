import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public cardADM = false;

  constructor() { }

  ngOnInit(): void {
    this.visibilidad('#admin-card',false);
    this.cardADM = true;
    AOS.init();
  }
  public visibilidad(selector:any, visible:boolean) {
    var elemento = document.querySelector(selector);
    console.log(elemento);
    if (elemento != null) {
      elemento.style.display = visible?'block':'none';
    }
  }
}
