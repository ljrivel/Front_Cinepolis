/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiserviceService } from 'src/app/apiservice.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-crearpelicula',
  templateUrl: './crearpelicula.page.html',
  styleUrls: ['./crearpelicula.page.scss'],
})
export class CrearpeliculaPage implements OnInit {
  registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private route: Router,
    private service: ApiserviceService,
    public alertController: AlertController,) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      Titulo: ['', Validators.required],
      Director: ['', Validators.required],
      YearPublicacion: ['', Validators.required],
      EdadRequerida: ['', Validators.required],
      URL: ['', [Validators.required]],
      Actores: ['', [Validators.required]],
      Generos: ['', [Validators.required]],
      Duracion: ['', [Validators.required]],
      Idiomas: ['', [Validators.required]],
      Activo: ['1', Validators.required],
    });
  }

  crear(){
    this.service.createPelicula(this.registerForm.value).subscribe(
      (data) => {
        this.registerExitoso();
      },
      (error) => {
        this.registerFallido();
      }
    );
  }
  cancelar(){
    this.route.navigate(['/principal']);
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
      header: 'Pelicula agregada',
      message: 'Usted sera dirigido a la pagina principal',
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
}
