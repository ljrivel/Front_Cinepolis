/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable no-trailing-spaces */
/* eslint-disable eqeqeq */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ApiserviceService } from './../../apiservice.service';


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
  ocultarNinos = false;
  movie: any;

  constructor(
    private service: ApiserviceService,
    private route: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.idPelicula = this.activatedRoute.snapshot.paramMap.get('id');
    this.getPelicula();


  }


getPelicula(){

    this.service.getpelicula(this.idPelicula).subscribe((data: any) => {
        this.movie = data;
        if (data[0]['EdadRequerida'] >= 12){
          this.ocultarNinos = true;
        }

    });

}

addTicketsAdultos(){
  this.ticketAdultos ++;

}

lessTicketsAdultos(){
  if(this.ticketAdultos != 0){
    this.ticketAdultos --;
  }

}

addTicketsAdultosM(){
  this.ticketAdultosMayor ++;

}

lessTicketsAdultosM(){
  if(this.ticketAdultosMayor != 0){
    this.ticketAdultosMayor --;
  }


}

addTicketsNinos(){
  this.ticketNinos ++;

}

lessTicketsNinos(){
  if(this.ticketNinos != 0){
    this.ticketNinos --;
  }


}

comprar() {
  this.route.navigate(['/comprar']);
}


cancelar(){
  this.route.navigate(['/principal']);
}

}
