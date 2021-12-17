import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddCapComponent } from './add-cap/add-cap.component';
import { ContentCapacitacionComponent } from './content-capacitacion/content-capacitacion.component';

@Component({
  selector: 'app-gestion-capacitaciones',
  templateUrl: './gestion-capacitaciones.component.html',
  styleUrls: ['./gestion-capacitaciones.component.css']
})
export class GestionCapacitacionesComponent implements OnInit {

  idCapacitacion:number;
  constructor(private dialog:MatDialog) { }

  ngOnInit(): void {
  }

  newCapacitacion():void{
    this.dialog.open(AddCapComponent);
  }
  openContentCap():void{
    this.dialog.open(ContentCapacitacionComponent);
  }
}
