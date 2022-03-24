/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';

import { ApiserviceService } from './../../apiservice.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { format, parseISO } from 'date-fns';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-modificar-cliente',
  templateUrl: './modificar-cliente.page.html',
  styleUrls: ['./modificar-cliente.page.scss'],
})
export class ModificarClientePage implements OnInit {

  registerForm: FormGroup;
  idusuario: any;
  Usuario: any;
  CantidadVacunas: any;
  datevalue = '';
  dateValue2 = '';
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: Router,
    private service: ApiserviceService,
    private activatedRoute: ActivatedRoute,
    public alertController: AlertController,) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      idUsuario: ['', Validators.required],
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
      Activo: ['1', [Validators.required,]],
    });
    this.idusuario = this.activatedRoute.snapshot.paramMap.get('id');
    this.getCliente();
  }


  dismiss() {
    this.route.navigate(['/clientes']);
  }

  modificar(){
    this.service.changeUser(this.registerForm.value).subscribe(
      (data) => {
        this.modificacionExitoso();
      },
      (error) => {

        this.modificacionFallida();
      }
    );
  }

  getCliente(){
    this.service.getUser(this.idusuario).subscribe((data: any) => {
        this.Usuario = data;
        this.registerForm.controls['idUsuario'].setValue(data[0].idUsuario);
        this.registerForm.controls['Nombre'].setValue(data[0].Nombre);
        this.registerForm.controls['Apellido1'].setValue(data[0].Apellido1);
        this.registerForm.controls['Apellido2'].setValue(data[0].Apellido2);
        this.registerForm.controls['TipoUsuario'].setValue(data[0].TipoUsuario);
        this.registerForm.controls['Email'].setValue(data[0].Email);
        this.registerForm.controls['Apellido2'].setValue(data[0].Apellido2);
        this.registerForm.controls['Password'].setValue(data[0].Password);
        this.registerForm.controls['Edad'].setValue(data[0].Edad);
        this.registerForm.controls['NumeroCedula'].setValue(data[0].NumeroCedula);
        this.registerForm.controls['EsquemaVacunacion'].setValue(data[0].EsquemaVacunacion);
        this.CantidadVacunas = data[0].EsquemaVacunacion;
        this.dateValue2 = this.formatDate(data[0].FechaNacimiento);

    });
}


  formatDate(value: string) {
    this.datevalue = value;
    this.registerForm.controls['FechaNacimiento'].setValue(this.datevalue);
    return format(parseISO(value), 'MMM dd yyyy');
  }

  async modificacionExitoso() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Modificacion Exitosa',
      message: 'Usted se dirigira al menu de clientes.',
      buttons: [
        {
          text: 'OK',
          cssClass: 'secondary',
          id: 'ok-button',
          handler: (blah) => {
            this.route.navigate(['/clientes']).then(() => {
              window.location.reload();
            });

          }
        }
      ]
    });
    await alert.present();

  }

  async modificacionFallida() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Modificaion Fallida',
      message: 'ha ocurrido un error vuelva a intentarlo',
      buttons: [
        {
          text: 'OK',
          cssClass: 'secondary',
          id: 'ok-button',
        }
      ]
    });
    await alert.present();

  }


}
