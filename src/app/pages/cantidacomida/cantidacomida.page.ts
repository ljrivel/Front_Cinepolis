/* eslint-disable no-trailing-spaces */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable eqeqeq */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ApiserviceService } from './../../apiservice.service';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-cantidacomida',
  templateUrl: './cantidacomida.page.html',
  styleUrls: ['./cantidacomida.page.scss'],
})
export class CantidacomidaPage implements OnInit {

  producto: any;
  idProducto: any;
  cantidad = 0;
  carrito: any;
  existe = false;
  posicion: any;

  constructor(
    private service: ApiserviceService,
    private route: Router,
    private activatedRoute: ActivatedRoute,
    public alertController: AlertController,) { }

  ngOnInit() {
    this.idProducto = this.activatedRoute.snapshot.paramMap.get('id');
    this.getProducto();
    this.carrito = JSON.parse(localStorage.getItem('compras'));

  }

  less(){
    if(this.cantidad != 0){
      this.cantidad --;
    }
  }

  add(){
    if(this.producto[0]['CantidadEnStock'] > this.cantidad){
      this.cantidad ++;
    }
    else{
      this.error();
    }

  }

  existentes(data: any){

    const tamano = (JSON.parse(localStorage.getItem('compras'))).length;
    for(let i =0; i < tamano; i++){
      if(this.carrito[i]['Producto'] == data[0].Nombre){
        this.posicion = i;
        this.existe = true;
        this.cantidad = this.carrito[i]['Cantidad'];
        break;
      }
    }
  }


  getProducto(){
    this.service.getproducto(this.idProducto).subscribe((data: any) => {
      this.producto = data;
      this.existentes(data);
    });
  }

  comprar(){

    if(this.existe == false){
      const total = this.cantidad * this.producto[0].Precio;
      const url = this.producto[0].URL;
      const Producto ={ Producto: this.producto[0].Nombre, TipoProducto: 'Producto' , Cantidad: this.cantidad , Precio: total,
      URL: url, id: this.producto[0].idProducto};
      this.carrito.push(Producto);
      this.service.setProductos(this.carrito);
    }
    else {
      const total = this.cantidad * this.producto[0].Precio;
      this.carrito[this.posicion]['Cantidad'] = this.cantidad;
      this.carrito[this.posicion]['Precio'] = total;
      this.service.setProductos(this.carrito);
    }
    this.ready();

  }

  cancelar(){
    this.route.navigate(['/comida']).then(() => {
      window.location.reload();
    });
  }

  async error() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Error',
      message: 'Ya no tenemos mas de este producto en stock',
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

  async ready() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Sus productos han sido agregados al carrito',
      message: 'Desea comprar algo mas?',
      buttons: [
        {
          text: 'SI',
          cssClass: 'secondary',
          id: 'ok-button',
          handler: (blah) => {
            this.route.navigate(['/comida']);
          }
        },
        {
          text: 'NO',
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
