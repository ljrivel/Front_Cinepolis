/* eslint-disable eqeqeq */
/* eslint-disable @typescript-eslint/dot-notation */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiserviceService } from './../../apiservice.service';

@Component({
  selector: 'app-comida',
  templateUrl: './comida.page.html',
  styleUrls: ['./comida.page.scss'],
})
export class ComidaPage implements OnInit {
  ocultar = false;
  currentUser: any;
  allcomida: any;
  constructor(
    private service: ApiserviceService,
    private route: Router
  ) { }

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('user'));
    if ((this.currentUser[0]['TipoUsuario']) == '0'){
      this.ocultar = true;
    }
  }
      // eslint-disable-next-line @typescript-eslint/member-ordering
      option = {
        slidesPerView: 1.5,
        centeredslides: true,
        loop: true,
        spaceBetween: 5,
        // autoplay:true,
      };

  comprar() {
    this.route.navigate(['/compra-comida',0]);
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

  agregarComida(){
    this.route.navigate(['/crearcomida']);
  }

}
