import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Capacitacion } from 'src/app/Models/Capacitacion';
import { CapacitacionService } from 'src/app/Service/capacitacion.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  capacitacion:FormGroup;

  constructor(private pop:MatDialog, private router:Router, private capService: CapacitacionService,private formBuilder: FormBuilder) { 

  }

  ngOnInit(): void {
    this.formInit();
  }

  cancelar(){
    this.pop.closeAll();
  }

  guardar(cap:Capacitacion){
    this.capService.guardar(cap).subscribe(data=>{
      Swal.fire(
        'Registrado!',
        'se registro una nueva capacitacion',
        'success'
      )
      this.pop.closeAll();
    })
  }
  private formInit(): any {
    const controls = {
      id: ['', [Validators.required]],
      nombre: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      portada: [''],
      fecha: [''],
      fechaFin: ['']
    };
    this.capacitacion = this.formBuilder.group(controls);
  }
}
