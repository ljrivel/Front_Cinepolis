/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';

import { ApiserviceService } from './../../apiservice.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { format, parseISO } from 'date-fns';
import { AlertController } from '@ionic/angular';



@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})


export class RegisterPage implements OnInit {
  registerForm: FormGroup;

  datevalue = '';
  dateValue2 = '';
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: Router,
    private service: ApiserviceService,
    public alertController: AlertController,) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      Nombre: ['', Validators.required],
      Apellido1: ['', Validators.required],
      Apellido2: ['', Validators.required],
      TipoUsuario: ['1', Validators.required],
      Email: ['', [Validators.required, Validators.email]],
      EsquemaVacunacion: ['', Validators.required],
      FechaNacimiento: ['', Validators.required],
      Edad: ['', Validators.required],
      Password: ['1', Validators.required],
      Cedula: ['', [Validators.required,Validators.minLength(9)]],
      Activo: ['1', Validators.required],
    });
  }


  register(){
    const pass = Math.random().toString(36).slice(7);
    this.registerForm.controls['Password'].setValue(pass);
    this.service.registerUser(this.registerForm.value).subscribe(
      (data) => {
        this.registerExitoso();
      },
      (error) => {
        this.registerFallido();
      }
    );
  }

  dismiss() {
    this.route.navigate(['/home']).then(() => {
      window.location.reload();
    });
  }

  formatDate(value: string) {
    this.datevalue = value;
    this.registerForm.controls['FechaNacimiento'].setValue(this.datevalue);
    return format(parseISO(value), 'MMM dd yyyy');
  }

  async registerFallido() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Ha ocurrido un error',
      message: 'Porfavor intentelo denuevo',
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

  async registerExitoso() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Register Exitoso',
      message: 'Revise su correo para obtener el password de su cuenta',
      buttons: [
        {
          text: 'OK',
          cssClass: 'secondary',
          id: 'ok-button',
          handler: (blah) => {
            this.route.navigate(['/login']).then(() => {
              window.location.reload();
            });
          }
        }
      ]
    });
    await alert.present();

  }
}
