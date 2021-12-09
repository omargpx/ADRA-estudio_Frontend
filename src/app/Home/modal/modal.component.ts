import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/Service/usuario.service';
import { usuario } from 'src/app/Models/Usuario';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  formUsuarios: FormGroup;
  usuarios: usuario[];
  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder,
    private serviceUsu:UsuarioService
  ) {}

  ngOnInit(): void {
    this.formInit();
  }

  private formInit(): any {
    const controls = {
      Usuario: ['', [Validators.required]],
      Clave: ['', [Validators.required]]
    };
    this.formUsuarios = this.formBuilder.group(controls);
  }

  getUsuarios(): void {
    this.serviceUsu.getUsuarios()
    .subscribe(Response=>{this.usuarios=Response;})
  }
}
