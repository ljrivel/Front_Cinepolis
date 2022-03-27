/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable object-shorthand */
/* eslint-disable quote-props */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable no-trailing-spaces */
/* eslint-disable eqeqeq */
/* eslint-disable @typescript-eslint/dot-notation */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ApiserviceService } from './../../apiservice.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  usuario: any;
  productos: any;
  alimento = [];
  pelis = [];
  precioTotal = 0;
  cantidad: any;


  constructor(
    private service: ApiserviceService,
    private route: Router,
    public alertController: AlertController,
  ) { }

      // eslint-disable-next-line @typescript-eslint/member-ordering
      option = {
        slidesPerView: 1.5,
        centeredslides: true,
        //loop: true,
        spaceBetween: 5,
        // autoplay:true,
      };

  ngOnInit() {
    this.usuario = JSON.parse(localStorage.getItem('user'));
    this.productos = JSON.parse(localStorage.getItem('compras'));
    this.cantidad = (JSON.parse(localStorage.getItem('compras'))).length;
    this.dividir();
  }

  eliminar(nombre: any){
    const id = this.buscarId(nombre);
    this.productos.pop(id);
    this.service.setProductos(this.productos);
    window.location.reload();

  }

  compra(nombre: any){
    const id = this.buscarId(nombre);
    const info = this.productos[id];

    if(info['TipoProducto'] == 'Producto'){
      this.compraComida(info);
    }
    else{
      this.compraBoletos(info);
    }
  }

  compraComida(info: any){
    const tamano = 1;
    let format = '';
    format = format + info['id'] + ":" + info['Cantidad'];

    const pdf = {Nombre: info['Producto'], Cantidad: info['Cantidad']+'',Precio: info['Precio']+'', Email: this.usuario[0]['Email'] };


    this.service.ComprarProductos(this.usuario[0]['idUsuario'],info['Precio'],format,tamano,pdf).subscribe(
      (data) => {
        if(data[0]['Mensaje'] != "Error: Cantidad mayor que disponibles"){

          this.exitoso(info['Producto']);
        }
        else{
          this.error(info['Producto']);
        }
      },
      (error) => {
        this.fallido();
      });


  }

  compraComidaAll(){

  }


  formatBoletos(boletos: any,tamano: any){
    let retorno = '';
    for(let i = 0; i < tamano; i++ ){
      retorno = retorno + boletos[i];
      retorno = retorno + ";";
    }
    return retorno;
  }

  compraBoletos(info: any){

    const tamano =info['Asientos'].length;
    const boletos = this.formatBoletos(info['Asientos'],tamano);
    let asientos = '';
    for(let i =0; i < tamano; i++ ){
      asientos = asientos +info['Asientos'][i] + " ";
    }

    const pdf = {EntradaAdultos: info['TicketsGeneral']+'', EntradaMayores: info['TicketAdultos']+''
    , EntradaNinos: info['TicketsNinos']+'',Asientos: asientos, PrecioTotal:info['Precio']+'', Email: this.usuario[0]['Email'] };


    this.service.ComprarBoletos(this.usuario[0]['idUsuario'],info['idCartelera'],info['Precio'],boletos,tamano,pdf).subscribe(
      (data) => {
        if(data[0]['Mensaje'] != "Error: Un asiento no disponible"){

          this.exitoso(info['Producto']);
        }
        else{
          this.error2(info['Producto']);
        }

      },
      (error) => {
        this.fallido();
      });
  }


  buscarId(nombre: any){
    for(let i =0; i < this.cantidad; i++){
      if(this.productos[i]['Producto'] == nombre){
        return i;
      }
    }
  }

  dividir(){

    for(let i =0; i < this.cantidad; i++){
      if(this.productos[i]['TipoProducto'] == 'Producto'){
        this.alimento.push(this.productos[i]);
      }
      else{
        this.pelis.push(this.productos[i]);
      }
      this.precioTotal = this.precioTotal + this.productos[i]['Precio'];
    }
  }

  historial(){
    this.route.navigate(['/historial']).then(() => {
      window.location.reload();
    });
  }

  principal() {
    this.route.navigate(['/principal']).then(() => {
      window.location.reload();
    });
  }

  perfil() {
    this.route.navigate(['/perfil']).then(() => {
      window.location.reload();
    });
  }

  comida() {
    this.route.navigate(['/comida']);
  }

  async exitoso(nombre: any) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Compra exitosa',
      message: 'Se ha registrado tu compra.',
      buttons: [
        {
          text: 'OK',
          cssClass: 'secondary',
          id: 'ok-button',
          handler: (blah) => {
            this.eliminar(nombre);

          }
        }
      ]
    });
    await alert.present();

  }

  async fallido() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Compra fallida',
      message: 'Ha ocurrido un error',
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



  async error(nombre: any) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Error',
      message: 'Los asientos ya estan ocupados, eliminares su orden',
      buttons: [
        {
          text: 'OK',
          cssClass: 'secondary',
          id: 'ok-button',
          handler: (blah) => {
            this.eliminar(nombre);

          }
        }
      ]
    });
    await alert.present();

  }

  async error2(nombre: any) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Error',
      message: 'Ya no quedan productos disponibles',
      buttons: [
        {
          text: 'OK',
          cssClass: 'secondary',
          id: 'ok-button',
          handler: (blah) => {
            this.eliminar(nombre);

          }
        }
      ]
    });
    await alert.present();

  }

}
