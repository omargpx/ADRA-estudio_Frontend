import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-cap',
  templateUrl: './add-cap.component.html',
  styleUrls: ['./add-cap.component.css']
})
export class AddCapComponent implements OnInit {

  btnDisabled:boolean=false;
  nextForm:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

  loadImg(){
    
  }
  siguienteForm(){
    this.nextForm=true;
    this.btnDisabled=true;
  }

}
