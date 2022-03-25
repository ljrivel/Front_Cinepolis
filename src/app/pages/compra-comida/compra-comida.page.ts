/* eslint-disable eqeqeq */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ApiserviceService } from './../../apiservice.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-compra-comida',
  templateUrl: './compra-comida.page.html',
  styleUrls: ['./compra-comida.page.scss'],
})
export class CompraComidaPage implements OnInit {
  producto: any;
  idProducto: any;
  cantidad = 0;
  constructor(
    private service: ApiserviceService,
    private route: Router,
    private activatedRoute: ActivatedRoute,
    public alertController: AlertController,) { }

  ngOnInit() {
    this.idProducto = this.activatedRoute.snapshot.paramMap.get('id');
    this.getProducto();
  }


  getProducto(){
    this.service.getproducto(this.idProducto).subscribe((data: any) => {
      this.producto = data;
    });
  }

  modificar(){
    this.route.navigate(['/modificarcomida',this.idProducto]);
  }

  eliminar(){
    this.service.deleteProducto(this.idProducto).subscribe(
      (data) => {
        this.borradoExitoso();
      },
      (error) => {
        this.borradoFallido();
      }
    );
  }

  cancelar(){

    this.route.navigate(['/comida']);
  }

  async borradoFallido() {
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

  async borradoExitoso() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Producto eliminada',
      message: 'Usted sera dirigido a la pagina principal',
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
