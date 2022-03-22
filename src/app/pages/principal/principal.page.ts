/* eslint-disable no-trailing-spaces */
/* eslint-disable eqeqeq */
/* eslint-disable @typescript-eslint/dot-notation */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ApiserviceService } from './../../apiservice.service';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {
    currentUser: any;
    allmovies: any;
    prueba: any;
    resultado: any;
    ocultar = false;
    flag = false;
    constructor(
      private service: ApiserviceService,
      private route: Router
      ) {

      }
    // eslint-disable-next-line @typescript-eslint/member-ordering
    option = {
      slidesPerView: 1.5,
      centeredslides: true,
      loop: true,
      spaceBetween: 5,
      // autoplay:true,
    };

    ngOnInit(): void {
      this.getPelis();
      this.currentUser = JSON.parse(localStorage.getItem('user'));
      if ((this.currentUser[0]['TipoUsuario']) == '0'){
        this.ocultar = true;
      }
      if(this.flag == false){
        this.flag = true;
        this.ngOnInit();
      }

    }

    getPelis() {
      this.service.getspelicula().subscribe((data: any) => {
        this.allmovies = data;
      });

    }

    principal() {
      this.route.navigate(['/principal']);
    }

    perfil() {
      this.route.navigate(['/perfil']);
    }

    comida() {
      this.route.navigate(['/comida']);
    }

    clientes() {
      this.route.navigate(['/clientes']);
    }

    pelicula(idPelicula: any){
      this.route.navigate(['/pelicula',idPelicula]);
    }

    agregarPelicula(){
      this.route.navigate(['/crearpelicula']);
    }


}
