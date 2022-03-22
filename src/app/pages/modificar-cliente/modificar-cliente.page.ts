/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';

import { ApiserviceService } from './../../apiservice.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService } from './../../alert.service';
import { ActivatedRoute, Router } from '@angular/router';
import { format, parseISO } from 'date-fns';

@Component({
  selector: 'app-modificar-cliente',
  templateUrl: './modificar-cliente.page.html',
  styleUrls: ['./modificar-cliente.page.scss'],
})
export class ModificarClientePage implements OnInit {

  registerForm: FormGroup;
  idUsuario: any;
  Usuario: any;
  TipoUsuario: any;
  datevalue = '';
  dateValue2 = '';
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: Router,
    private alertService: AlertService,
    private service: ApiserviceService,
    private activatedRoute: ActivatedRoute,) { }

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
      NumeroCedula: ['', [Validators.required,Validators.minLength(9)]],
    });
    this.idUsuario = this.activatedRoute.snapshot.paramMap.get('id');
    this.getCliente();
  }


  dismiss() {
    this.route.navigate(['/clientes']);
  }

  modificar(){
    //
  }

  getCliente(){
    this.service.getUser(this.idUsuario).subscribe((data: any) => {
        this.Usuario = data;
        console.log(data);
        this.registerForm.controls['Nombre'].setValue(data[0].Nombre);
        this.registerForm.controls['Apellido1'].setValue(data[0].Apellido1);
        this.registerForm.controls['Apellido2'].setValue(data[0].Apellido2);
        this.registerForm.controls['TipoUsuario'].setValue(data[0].TipoUsuario);
        this.TipoUsuario = data[0].TipoUsuario;
        this.registerForm.controls['Email'].setValue(data[0].Email);
        this.registerForm.controls['Apellido2'].setValue(data[0].Apellido2);
        this.registerForm.controls['Password'].setValue(data[0].Password);
        this.registerForm.controls['Edad'].setValue(this.formatDate(data[0].Edad));
        this.registerForm.controls['NumeroCedula'].setValue(data[0].NumeroCedula);
        this.registerForm.controls['EsquemaVacunacion'].setValue(this.formatDate(data[0].EsquemaVacunacion));
    });
}


  formatDate(value: string) {
    this.datevalue = value;
    this.registerForm.controls['FechaNacimiento'].setValue(this.datevalue);
    return format(parseISO(value), 'MMM dd yyyy');
  }


}
