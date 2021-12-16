import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-devocion-matutina',
  templateUrl: './devocion-matutina.component.html',
  styleUrls: ['./devocion-matutina.component.css']
})
export class DevocionMatutinaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

}
