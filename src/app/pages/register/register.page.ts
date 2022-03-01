/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';

import { ApiserviceService } from './../../apiservice.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService } from './../../alert.service';
import { Router } from '@angular/router';
import { format, parseISO } from 'date-fns';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})


export class RegisterPage implements OnInit {
  registerForm: FormGroup;
  vacuna: string[] = [
    '1',
    '2',
    '3'
  ];
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
      TipoUsuario: ['1', Validators.required],
      Password: ['', [Validators.required, Validators.minLength(6)]],
      Email: ['', [Validators.required, Validators.email]],
      EsquemaVacunacion: ['', Validators.required],
      FechaNacimiento: ['', Validators.required],
      Edad: ['', Validators.required],
      Cedula: ['', Validators.required],
    });
  }

  get f() {
    return this.registerForm.controls;
  }

  register(){

    this.service.createUser(this.registerForm.value).subscribe(
      (data) => {
        this.alertService.success('Registration successful', true);
        this.route.navigate(['/principal']);
      },
      (error) => {
        this.alertService.error(error);
      }
    );
  }

  dismiss() {
    this.route.navigate(['/home']);
  }

  formatDate(value: string) {
    this.datevalue = value;
    return format(parseISO(value), 'MMM dd yyyy');
  }
}
