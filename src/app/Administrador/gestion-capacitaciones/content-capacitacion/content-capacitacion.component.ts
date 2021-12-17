import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-content-capacitacion',
  templateUrl: './content-capacitacion.component.html',
  styleUrls: ['./content-capacitacion.component.css']
})
export class ContentCapacitacionComponent implements OnInit {
  @ViewChild('tipRecurso') recurso:ElementRef;

  titleButton:string='Nuevo Recurso';
  formNewRecurso:boolean=false;
  archivo:boolean=false;
  Url:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

  tipoRecurso(){
    let rec= this.recurso.nativeElement;
    if(rec.value == 1 || rec.value == 2){
      console.log('archivo')
      this.archivo=true;
      this.Url=false;
    }else if(rec.value == 3 ||rec.value == 4){
      console.log('url')
      this.archivo=false;
      this.Url=true;
    }else{
      console.log('no se obtuvo el valor')
      this.archivo=false;
      this.Url=false;
    }
  }
  nuevoRecurso(){
    if(this.formNewRecurso==false){
      this.formNewRecurso=true;
      this.titleButton='Ocultar Form';
    }else{
      this.formNewRecurso=false;
      this.titleButton='Nuevo Recurso';
    }
  }
}
