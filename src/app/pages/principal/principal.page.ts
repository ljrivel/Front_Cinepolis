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
    allcartelera: any;
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
      //loop: true,
      spaceBetween: 5,
      // autoplay:true,
    };

    ngOnInit(): void {

      this.currentUser = JSON.parse(localStorage.getItem('user'));
      if ((this.currentUser[0]['TipoUsuario']) == '0'){
        this.ocultar = true;
        this.getPelis();
      }
      this.getCartelera();


    }

    getPelis() {
      this.service.getspelicula().subscribe((data: any) => {
        this.allmovies = data;
      });

    }

    getCartelera() {
      this.service.getsCartelera().subscribe((data: any) => {
        this.allcartelera = data;
      });

    }

    principal() {
      this.route.navigate(['/principal']).then(() => {
        window.location.reload();
      });
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

        this.route.navigate(['/pelicula',idPelicula]).then(() => {
          window.location.reload();
        });


    }
    goCartelera(){
      this.route.navigate(['/seleccionaragregar']).then(() => {
        window.location.reload();
      });
    }

    cartelera(idPelicula: any){
      if(this.ocultar == false){
        this.route.navigate(['/pelicula',idPelicula]).then(() => {
          window.location.reload();
        });
      }

    }

    agregarPelicula(){
      this.route.navigate(['/crearpelicula']).then(() => {
        window.location.reload();
      });
    }


}
