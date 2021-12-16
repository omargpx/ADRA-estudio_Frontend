import { Component, Inject, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { Persona } from 'src/app/Models/Persona';
import { PersonaService } from 'src/app/Service/persona.service';
import * as $ from 'jquery';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { RoleService } from 'src/app/Service/role.service';
import { RoleUsu } from 'src/app/Models/RoleUsu';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css'],
})
export class NewUserComponent implements OnInit {

  formUsuario=new FormGroup({
    persona: new FormControl('',Validators.required),
    rol: new FormControl('',Validators.required)
  });

  RolAcceso: boolean = false;
  personas: Persona[];
  constructor(private servicePersona: PersonaService,private serviceRoleUsu:RoleService,public dialogRef:MatDialog) {}

  ngOnInit(): void {
    AOS.init();
    this.getPersonas();
    this.getTipoAcceso();
  }
  getPersonas(): void {
    this.servicePersona.getPersonas().subscribe((Response) => {
      this.personas = Response || [];
    });
  }

  getTipoAcceso(): void {
    let tipAcces = $('input[id="onlyAcces"]:checked').val();
    if (tipAcces != undefined) {
      this.RolAcceso = false;
    }else{
      this.RolAcceso = true;
    }
  }

  guardarUsuario(form:RoleUsu){
    console.log(form);
    this.serviceRoleUsu.asignarRolUsuario(form);
  }

  closeDialog(){
    this.dialogRef.closeAll();
  }
}
