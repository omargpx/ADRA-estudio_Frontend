import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import * as AOS from 'aos';
import { Banquitos } from 'src/app/Models/Banquitos';
import { Capacitacion } from 'src/app/Models/Capacitacion';
import { usuario } from 'src/app/Models/Usuario';
import { BancosService } from 'src/app/Service/bancos.service';
import { CapacitacionService } from 'src/app/Service/capacitacion.service';
import { UsuarioService } from 'src/app/Service/usuario.service';

@Component({
  selector: 'app-portal-administrador',
  templateUrl: './portal-administrador.component.html',
  styleUrls: ['./portal-administrador.component.css']
})
export class PortalAdministradorComponent implements OnInit {

  totalUsuarios:number | string = 'N';
  totalBancos:number | string = 'N';
  totalCapacitacion:number | string = 'N';
  Capacitaciones:Capacitacion[];
  Bancos:Banquitos[];
  Usuarios:usuario[];

  constructor(private router:Router,private serviceBanco:BancosService,private serviceUsu:UsuarioService,private serviceCapacitation:CapacitacionService) { }

  ngOnInit(): void {
    AOS.init();
    this.getBancos();
    this.getUsuarios();
    this.getCapacitaciones();
  }

  getBancos():void{
    this.serviceBanco.getBanquitos().subscribe((response)=>{
      this.Bancos=response;
      this.totalBancos=this.Bancos.length;
    })
  }

  getUsuarios():void{
    this.serviceUsu.getUsuarios().subscribe((response)=>{
      this.Usuarios=response;
      this.totalUsuarios=this.Usuarios.length;
    });
  }

  getCapacitaciones():void{
    this.serviceCapacitation.listar().subscribe((response)=>{
      this.Capacitaciones=response;
      this.totalCapacitacion=this.Capacitaciones.length;
    });
  }
  gestionUsuarios(){
    this.router.navigate(['gestionUsuarios']);
  }
  gestionCapacitaciones(){
    this.router.navigate(['gestionCapacitaciones']);
  }
}
