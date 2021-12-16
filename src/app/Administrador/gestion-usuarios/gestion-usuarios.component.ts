import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import * as AOS from 'aos';
import { Persona } from 'src/app/Models/Persona';
import { Rol } from 'src/app/Models/Rol';
import { usuario } from 'src/app/Models/Usuario';
import { PersonaService } from 'src/app/Service/persona.service';
import { UsuarioService } from 'src/app/Service/usuario.service';
import { NewUserComponent } from './new-user/new-user.component';

@Component({
  selector: 'app-gestion-usuarios',
  templateUrl: './gestion-usuarios.component.html',
  styleUrls: ['./gestion-usuarios.component.css'],
})
export class GestionUsuariosComponent implements OnInit {
  numRoles: any;
  personas: Persona[];
  usuarios: usuario[];
  constructor(
    private serviceUsu: UsuarioService,
    private dialog: MatDialog,
    private servicePersona: PersonaService
  ) {}

  ngOnInit(): void {
    AOS.init();
    this.getUsuarios();
    this.getPersonas();
  }
  getUsuarios(): void {
    this.serviceUsu.getUsuarios().subscribe((Response) => {
      this.usuarios = Response;
    });
  }
  getPersonas(): void {
    this.servicePersona.getPersonas().subscribe((Response) => {
      this.personas = Response || [];
      console.log(this.personas)
    });
  }

  openNewUsuario() {
    this.dialog.open(NewUserComponent);
    /* results.afterClosed().subscribe((response)=>{
      console.log(response)
    })*/
  }
}
