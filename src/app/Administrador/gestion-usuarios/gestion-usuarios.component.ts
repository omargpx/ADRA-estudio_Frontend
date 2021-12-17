import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import * as AOS from 'aos';
import { Persona } from 'src/app/Models/Persona';
import { Rol } from 'src/app/Models/Rol';
import { usuario } from 'src/app/Models/Usuario';
import { PersonaService } from 'src/app/Service/persona.service';
import { UsuarioService } from 'src/app/Service/usuario.service';
import Swal from 'sweetalert2';
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
    this.loadData();
    this.getUsuarios();
    this.getPersonas();
  }
  getUsuarios(): void {
    setTimeout(() => {
      this.serviceUsu.getUsuarios().subscribe((Response) => {
        this.usuarios = Response;
      });
    }, 2000);
  }
  getPersonas(): void {
    setTimeout(() => {
      this.servicePersona.getPersonas().subscribe((Response) => {
        this.personas = Response || [];
        console.log(this.personas);
      });
    }, 2000);
  }

  openNewUsuario() {
    this.dialog.open(NewUserComponent);
    /* results.afterClosed().subscribe((response)=>{
      console.log(response)
    })*/
  }

  loadData() {
    let timerInterval: any;
    Swal.fire({
      title: 'Load Data',
      html: 'Trayendo data en <b></b> msg.',
      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        let b: any = Swal.getHtmlContainer()?.querySelector('b');
        timerInterval = setInterval(() => {
          b.textContent = Swal.getTimerLeft();
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log('getData Concluida');
      }
    });
  }
}
