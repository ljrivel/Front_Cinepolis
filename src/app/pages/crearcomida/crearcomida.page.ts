/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiserviceService } from 'src/app/apiservice.service';
import { AlertController } from '@ionic/angular';


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
    public alertController: AlertController,
  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      Nombre: ['', Validators.required],
      TipoProducto: ['',Validators.required],
      CantidadEnStock: ['', Validators.required],
      Precio: ['',Validators.required],
      URL: ['',Validators.required],
      Activo: ['1',Validators.required],
    });
  }

  cancelar(){
    this.route.navigate(['/comida']);
  }


  crear(){
    console.log(this.registerForm);
    this.service.createProducto(this.registerForm.value).subscribe(
      (data) => {

        this.registerExitoso();
      },
      (error) => {
          this.registerFallido();
      }
    );
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
      message: 'Usted ha registrado el producto correctamente',
      buttons: [
        {
          text: 'OK',
          cssClass: 'secondary',
          id: 'ok-button',
          handler: (blah) => {
            this.route.navigate(['/comida']).then(() => {
              window.location.reload();
            });
          }
        }
      ]
    });
    await alert.present();

  }
}
