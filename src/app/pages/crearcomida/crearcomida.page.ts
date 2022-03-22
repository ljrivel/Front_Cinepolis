/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiserviceService } from 'src/app/apiservice.service';

@Component({
  selector: 'app-crearcomida',
  templateUrl: './crearcomida.page.html',
  styleUrls: ['./crearcomida.page.scss'],
})
export class CrearcomidaPage implements OnInit {
  registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private route: Router,
    private service: ApiserviceService,
  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      Nombre: ['', Validators.required],
      idTipoAlimento: ['',Validators.required],
      CantidadDisponible: ['', Validators.required],
      Precio: ['',Validators.required],
    });
  }

  cancelar(){
    this.route.navigate(['/comida']);
  }

}
