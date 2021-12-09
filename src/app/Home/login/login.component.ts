import { Component, OnInit, Query } from '@angular/core';
import * as AOS from 'aos';
import { UsuarioService } from 'src/app/Service/usuario.service';
import { usuario } from 'src/app/Models/Usuario';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuarios: usuario[];
  constructor(private serviceUsu:UsuarioService) { }

  ngOnInit(): void {
    AOS.init();
    this.getUsuarios();
  }

  getUsuarios(): void {
    this.serviceUsu.getUsuarios()
    .subscribe(Response=>{this.usuarios=Response;})
  }

  Ingresar(): void{
    
  }
}
