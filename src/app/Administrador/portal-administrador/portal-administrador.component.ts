import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import * as AOS from 'aos';
import { Banquitos } from 'src/app/Models/Banquitos';
import { Capacitacion } from 'src/app/Models/Capacitacion';
import { IResponse } from 'src/app/Models/IResppnse';
import { Pedido } from 'src/app/Models/Pedido';
import { Persona } from 'src/app/Models/Persona';
import { usuario } from 'src/app/Models/Usuario';
import { BancosService } from 'src/app/Service/bancos.service';
import { CapacitacionService } from 'src/app/Service/capacitacion.service';
import { PedidoService } from 'src/app/Service/pedido.service';
import { UsuarioService } from 'src/app/Service/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-portal-administrador',
  templateUrl: './portal-administrador.component.html',
  styleUrls: ['./portal-administrador.component.css'],
})
export class PortalAdministradorComponent implements OnInit {
  @ViewChild('contentPedido') pedido: ElementRef;

  totalUsuarios: number;
  totalBancos: number;
  totalCapacitacion: number;
  Capacitaciones: Capacitacion[];
  Bancos: Banquitos[];
  Usuarios: usuario[];
  response:IResponse;
  persona:Persona;

  loadUsu: boolean = true;
  loadBancos: boolean = true;
  loadCap: boolean = true;
  constructor(
    private router: Router,
    private serviceBanco: BancosService,
    private serviceUsu: UsuarioService,
    private serviceCapacitation: CapacitacionService,
    private servicePedido:PedidoService
  ) {}

  ngOnInit(): void {
    AOS.init();
    this.getBancos();
    this.getUsuarios();
    this.getCapacitaciones();
    this.getDatoPersona();
  }

  getBancos(): void {
    setTimeout(() => {
      this.serviceBanco.getBanquitos().subscribe((response) => {
        this.Bancos = response;
        this.totalBancos = this.Bancos.length;
      });
      this.loadBancos = false;
    }, 1500);
  }

  getUsuarios(): void {
    setTimeout(() => {
      this.serviceUsu.getUsuarios().subscribe((response) => {
        this.Usuarios = response;
        this.totalUsuarios = this.Usuarios.length;
      });
      this.loadUsu = false;
    }, 1000);
  }

  getCapacitaciones(): void {
    setTimeout(() => {
      this.serviceCapacitation.listar().subscribe((response) => {
        this.Capacitaciones = response;
        this.totalCapacitacion = this.Capacitaciones.length;
      });
      this.loadCap = false;
    }, 500);
  }
  gestionUsuarios() {
    this.router.navigate(['gestionUsuarios']);
  }
  gestionCapacitaciones() {
    this.router.navigate(['gestionCapacitaciones']);
  }

  getDatoPersona(){
    let dni = Number(sessionStorage.getItem('dni'));
    this.serviceUsu.getDataPersonaByDni(dni).subscribe((response)=>{
      this.response=response;
      let a=Object.values(response);
      this.persona=a[0]
    });
  }

  registrarPedido() {
    var id = this.persona.idPersona;
    var fechaActual = new Date();
    var fecha_inicio = fechaActual.toLocaleDateString(); //Capturando la fecha actual en formato string
    let valor = this.pedido.nativeElement;
    fechaActual.setMonth(fechaActual.getMonth() + 3);//sumandole meses a la fecha actual
    var fecha_fin=fechaActual.getDate() +"/"+ (fechaActual.getMonth()+1) +"/"+ fechaActual.getFullYear();
    var descripcion=valor.value;
    var data:Pedido = {
      id_pedido: 0,
      descripcion: descripcion,
      estado:1,
      fecha_inicio:fecha_inicio,
      fecha_fin:fecha_fin,
      id_persona:id
    }             //[descripcion,1,fecha_fin,fecha_inicio,0,id]
    console.log(data);
    if (valor.value == '') {
      Swal.fire('ERROR', 'No se encontro contenido a pedir', 'error');
    } else {
      this.servicePedido.guardarPedido(data);
      Swal.fire('¡EXITO!', 'Pedido de oracion realizada', 'success');
    }
  }
}
