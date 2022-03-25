/* eslint-disable no-trailing-spaces */
/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from './../../apiservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { format, parseISO } from 'date-fns';

@Component({
  selector: 'app-agregar-cartelera',
  templateUrl: './agregar-cartelera.page.html',
  styleUrls: ['./agregar-cartelera.page.scss'],
})
export class AgregarCarteleraPage implements OnInit {
  registerForm: FormGroup;
  idpelicula: any;
  dateValue2 = '';

  constructor(
    private service: ApiserviceService,
    private route: Router,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    public alertController: AlertController,
  ) { }

  ngOnInit() {
    this.idpelicula = this.activatedRoute.snapshot.paramMap.get('id');
    this.registerForm = this.formBuilder.group({
      id: [this.idpelicula, Validators.required],
      sala: ['', Validators.required],
      fecha: ['', Validators.required],
    });
  }
  formatDate(value: string) {
    console.log(value);
    this.registerForm.controls['fecha'].setValue(value);
    return format(parseISO(value), 'MMM dd yyyy');
  }

  cancelar(){
    this.route.navigate(['/principal']).then(() => {
      window.location.reload();
    });
  }

  agregar(){
    this.service.AgregarCartelera(this.registerForm.value).subscribe(
      (data) => {
        this.agregadoExitoso();
      },
      (error) => {

        this.agregadoFallida();
      }
    );
  }

  async agregadoExitoso() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Agregado Exitosa',
      message: 'Usted se dirigira al menu de peliculas.',
      buttons: [
        {
          text: 'OK',
          cssClass: 'secondary',
          id: 'ok-button',
          handler: (blah) => {
            this.route.navigate(['/principal']).then(() => {
              window.location.reload();
            });

          }
        }
      ]
    });
    await alert.present();

  }

  async agregadoFallida() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Agregado Fallida',
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
