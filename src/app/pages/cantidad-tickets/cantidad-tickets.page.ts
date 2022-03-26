/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable no-trailing-spaces */
/* eslint-disable eqeqeq */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ApiserviceService } from './../../apiservice.service';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-cantidad-tickets',
  templateUrl: './cantidad-tickets.page.html',
  styleUrls: ['./cantidad-tickets.page.scss'],
})
export class CantidadTicketsPage implements OnInit {
  idPelicula: any;
  ticketAdultos = 0;
  ticketAdultosMayor = 0;
  ticketNinos = 0;
  total = 0;
  disponibles: any;
  ocultarNinos = false;
  movie: any;
  idCartelera: any;


  constructor(
    private service: ApiserviceService,
    private route: Router,
    private activatedRoute: ActivatedRoute,
    public alertController: AlertController,
  ) { }

  ngOnInit() {
    this.idCartelera= JSON.parse(localStorage.getItem('id'));
    this.idPelicula = this.activatedRoute.snapshot.paramMap.get('id');
    this.getPelicula();
    this.asientosLibres();



  }


getPelicula(){

    this.service.getpelicula(this.idPelicula).subscribe((data: any) => {
        this.movie = data;
        if (data[0]['EdadRequerida'] >= 12){
          this.ocultarNinos = true;
        }

    });

}

asientosLibres(){
  this.service.getAsientosLibres(this.idCartelera).subscribe((data: any) => {

    this.disponibles= data[0][0].CantidadDisponible;
  });
}

addTicketsAdultos(){
  if(this.total < this.disponibles){
    this.ticketAdultos ++;
    this.total ++;
  }
  else{
    this.error();
  }


}

lessTicketsAdultos(){
  if(this.ticketAdultos != 0){
    this.ticketAdultos --;
  }

}

addTicketsAdultosM(){
  if(this.total < this.disponibles){
    this.ticketAdultosMayor ++;
    this.total ++;
  }
  else{
    this.error();
  }


}

lessTicketsAdultosM(){
  if(this.ticketAdultosMayor != 0){
    this.ticketAdultosMayor --;
  }


}

addTicketsNinos(){
  if(this.total < this.disponibles){
    this.ticketNinos ++;
    this.total ++;
  }
  else{
    this.error();
  }


}

lessTicketsNinos(){
  if(this.ticketNinos != 0){
    this.ticketNinos --;
  }


}

comprar() {

  const precioNinos = 2500 * this.ticketNinos;
  const precioGeneral = 3500 * this.ticketAdultos;
  const precioAmayor= 3000 * this.ticketAdultosMayor;
  const precioTotal = precioAmayor + precioGeneral + precioNinos;

  const compra = {TicketAdultos: this.ticketAdultosMayor, TicketsNinos: this.ticketNinos, TicketsGeneral: this.ticketAdultos
    , Precio: precioTotal, Total: this.total, Nombre: this.movie[0].Titulo, URL:this.movie[0].URL};


  this.service.setCantidadTickets(compra);
  this.route.navigate(['/comprar']);
}


cancelar(){
  this.route.navigate(['/principal']);
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

}
