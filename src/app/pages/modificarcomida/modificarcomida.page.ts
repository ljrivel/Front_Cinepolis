/* eslint-disable radix */
/* eslint-disable no-trailing-spaces */
/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable eqeqeq */
import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from './../../apiservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-modificarcomida',
  templateUrl: './modificarcomida.page.html',
  styleUrls: ['./modificarcomida.page.scss'],
})
export class ModificarcomidaPage implements OnInit {
  producto: any;
  idComida: any;
  registerForm: FormGroup;

  constructor(
    private service: ApiserviceService,
    private route: Router,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
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
      idProducto: ['',Validators.required],
    });

      this.idComida = this.activatedRoute.snapshot.paramMap.get('id');
      this.getProducto();



  }


  getProducto(){
    this.service.getproducto(this.idComida).subscribe((data: any) => {
      this.producto = data;
      this.registerForm.controls['Nombre'].setValue(data[0].Nombre);
      this.registerForm.controls['TipoProducto'].setValue(data[0].TipoProducto);
      this.registerForm.controls['CantidadEnStock'].setValue(data[0].CantidadEnStock);
      this.registerForm.controls['Precio'].setValue(data[0].Precio);
      this.registerForm.controls['URL'].setValue(data[0].URL);
      this.registerForm.controls['idProducto'].setValue(data[0].idProducto);

    });
  }

cancelar(){
  this.route.navigate(['/compra-comida',this.idComida]);
}

modificar(){

  this.registerForm.controls['CantidadEnStock'].setValue(parseInt(this.registerForm.controls['CantidadEnStock'].value));
  this.service.changeProducto(this.registerForm.value).subscribe(
    (data) => {
      this.modificacionExitoso();
    },
    (error) => {

      this.modificacionFallida();
    }
  );
}


async modificacionExitoso() {
  const alert = await this.alertController.create({
    cssClass: 'my-custom-class',
    header: 'Modificacion Exitosa',
    message: 'Usted se dirigira al menu de productos.',
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
