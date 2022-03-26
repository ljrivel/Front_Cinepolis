/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable no-trailing-spaces */
/* eslint-disable eqeqeq */
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ApiserviceService } from './../../apiservice.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-comprar',
  templateUrl: './comprar.page.html',
  styleUrls: ['./comprar.page.scss'],
})
export class ComprarPage implements OnInit {

  fila1: any;
  fila2: any;
  fila3: any;
  fila4: any;
  fila5: any;
  fila6: any;
  fila7: any;
  fila8: any;
  fila9: any;
  fila10: any;
  asientos: any;
  flag = false;
  idCartelera: any;
  Seleccionados= 0;
  Maximo: any;
  infoTickets: any;
  carrito: any;

  constructor(
    private service: ApiserviceService,
    private route: Router,
    private activatedRoute: ActivatedRoute,
    public alertController: AlertController,
  ) { }

  ngOnInit() {
    if(this.flag == false){
      this.carrito = JSON.parse(localStorage.getItem('compras'));
      this.idCartelera= JSON.parse(localStorage.getItem('id'));
      this.getAsientos();
      this.cantidadTickets();
    }


  }

  cantidadTickets(){
    this.infoTickets= JSON.parse(localStorage.getItem('cantidadtickets'));
    this.Maximo = this.infoTickets['Total'];
  }


  getAsientos(){
    this.service.getAsientos(this.idCartelera).subscribe((data: any) => {

      this.asientos = data[0];
      this.dividirAsientos(data[0]);
    });
  }

  dividirAsientos(data: any){
    for(let i = 0; i < 10; i++){
      this.subDividirAsientos(data,i*10,i);
    }
  }

  subDividirAsientos(data: any, i: any,Cualfila: any){

    const fila = [];
    for(let j = i; j < i+10; j++){
      fila.push(data[j]);
    }

    if(Cualfila == 0){
      this.fila1 = fila;
    }
    else if(Cualfila == 1){
      this.fila2 = fila;
    }
    else if(Cualfila == 2){
      this.fila3 = fila;
    }
    else if(Cualfila == 3){
      this.fila4 = fila;
    }
    else if(Cualfila == 4){
      this.fila5 = fila;
    }
    else if(Cualfila == 5){
      this.fila6 = fila;
    }
    else if(Cualfila == 6){
      this.fila7 = fila;
    }
    else if(Cualfila == 7){
      this.fila8 = fila;
    }
    else if(Cualfila == 8){
      this.fila9 = fila;
    }
    else if(Cualfila == 9){
      this.fila10 = fila;
    }

  }

  change(numero: any){
    this.flag = true;

    if(numero < 10){
        this.fila1[numero]['Estado']= this.changeColor(this.fila1[numero]['Estado']);
    }
    else if(numero > 9 && numero < 20){
      numero = numero -10;
      this.fila2[numero]['Estado']= this.changeColor(this.fila2[numero]['Estado']);
    }
    else if(numero > 19 && numero < 30){
      numero = numero -20;
      this.fila3[numero]['Estado']= this.changeColor(this.fila3[numero]['Estado']);
    }
    else if(numero > 29 && numero < 40){
      numero = numero -30;
      this.fila4[numero]['Estado']= this.changeColor(this.fila4[numero]['Estado']);
    }
    else if(numero > 39 && numero < 50){
      numero = numero -40;
      this.fila5[numero]['Estado']= this.changeColor(this.fila5[numero]['Estado']);
    }
    else if(numero > 49 && numero < 60){
      numero = numero -50;
      this.fila6[numero]['Estado']= this.changeColor(this.fila6[numero]['Estado']);
    }
    else if(numero > 59 && numero < 70){
      numero = numero -60;
      this.fila7[numero]['Estado']= this.changeColor(this.fila7[numero]['Estado']);
    }
    else if(numero > 69 && numero < 80){
      numero = numero -70;
      this.fila8[numero]['Estado']= this.changeColor(this.fila8[numero]['Estado']);
    }
    else if(numero > 79 && numero < 90){
      numero = numero -80;
      this.fila9[numero]['Estado']= this.changeColor(this.fila9[numero]['Estado']);
    }
    else if(numero > 89 && numero < 100){
      numero = numero -90;
      this.fila10[numero]['Estado']= this.changeColor(this.fila10[numero]['Estado']);
    }


  }

  changeColor(estado: any){

    if(this.Seleccionados < this.Maximo){
      this.Seleccionados ++;
      if(estado == 'seat'){
        if(this.Seleccionados == this.Maximo){
          this.listo();
        }
        return 'seat selected';
      }

    }
    if(estado == 'seat selected'){
      this.Seleccionados --;
      return 'seat';
    }
    else{
      return estado;
    }

  }


  finalizar(){
    const asientosPasar = [];
    for(let i = 0; i < 100;i++){
      if(this.asientos[i]['Estado'] == 'seat selected'){
        asientosPasar.push(i);
      }

    }

    const total = this.infoTickets['Precio'];
    const nombre = this.infoTickets['Nombre'];
    const url = this.infoTickets['URL'];
    const ticketsG = this.infoTickets['TicketsGeneral'];
    const ticketsA = this.infoTickets['TicketAdultos'];
    const ticketsN = this.infoTickets['TicketsNinos'];
    const cartelera = this.infoTickets['idCartelera'];
    const Producto ={ Producto: nombre, TipoProducto: 'Pelicula' , Cantidad: this.Maximo, Precio: total, Asientos: asientosPasar,
    URL: url, TicketAdultos:ticketsA, TicketsGeneral:ticketsG,TicketsNinos: ticketsN,idCartelera:cartelera};
    this.carrito.push(Producto);
    this.service.setProductos(this.carrito);
    this.service.resetCantidadTickets();
    this.route.navigate(['/principal']).then(() => {
      window.location.reload();
    });


  }




  async listo() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Ha selecionado todos los espacios',
      message: 'Desea comprar con esta seleccion?',
      buttons: [
        {
          text: 'SI',
          cssClass: 'secondary',
          id: 'ok-button',
          handler: (blah) => {
            this.finalizar();
          }
        },
        {
          text: 'NO',
          cssClass: 'secondary',
          id: 'ok-button',
        }
      ]
    });
    await alert.present();

  }

}
