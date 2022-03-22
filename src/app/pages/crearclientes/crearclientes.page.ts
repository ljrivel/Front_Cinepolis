/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';

import { ApiserviceService } from './../../apiservice.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService } from './../../alert.service';
import { Router } from '@angular/router';
import { format, parseISO } from 'date-fns';

@Component({
  selector: 'app-crearclientes',
  templateUrl: './crearclientes.page.html',
  styleUrls: ['./crearclientes.page.scss'],
})
export class CrearclientesPage implements OnInit {
  registerForm: FormGroup;
  datevalue = '';
  dateValue2 = '';
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: Router,
    private alertService: AlertService,
    private service: ApiserviceService,) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      Nombre: ['', Validators.required],
      Apellido1: ['', Validators.required],
      Apellido2: ['', Validators.required],
      TipoUsuario: ['', Validators.required],
      Email: ['', [Validators.required, Validators.email]],
      EsquemaVacunacion: ['', Validators.required],
      FechaNacimiento: ['', Validators.required],
      Password: ['', [Validators.required,Validators.minLength(6)]],
      Edad: ['', Validators.required],
      Cedula: ['', [Validators.required,Validators.minLength(9)]],
    });
  }


  register(){

    this.service.createUser(this.registerForm.value).subscribe(
      (data) => {
        this.alertService.success('Registration successful', true);
        this.route.navigate(['/login']);
      },
      (error) => {
        this.alertService.error(error);
      }
    );
  }

  dismiss() {
    this.route.navigate(['/clientes']);
  }

  formatDate(value: string) {
    this.datevalue = value;
    this.registerForm.controls['FechaNacimiento'].setValue(this.datevalue);
    return format(parseISO(value), 'MMM dd yyyy');
  }

}
