import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CapacitacionService } from 'src/app/Service/capacitacion.service';
import Swal from 'sweetalert2';
import { PopupComponent } from './popup/popup.component';
@Component({
  selector: 'app-capacitaciones',
  templateUrl: './capacitaciones.component.html',
  styleUrls: ['./capacitaciones.component.css'],
})
export class CapacitacionesComponent implements OnInit {
  capacitacion: any[];
  constructor(
    private capacitacionService: CapacitacionService,
    private popUp:MatDialog) {}

  ngOnInit(): void {
    this.getCapacitaciones();
  }
  getCapacitaciones(): void {
    this.capacitacionService.listar().subscribe((response) => {
      this.capacitacion = response || [];
      console.log(response);
    });
  }

  openDialog() {
    this.popUp.open(PopupComponent);
  }
}
