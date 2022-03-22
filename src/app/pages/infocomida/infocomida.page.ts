/* eslint-disable eqeqeq */
/* eslint-disable @typescript-eslint/dot-notation */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ApiserviceService } from './../../apiservice.service';

@Component({
  selector: 'app-infocomida',
  templateUrl: './infocomida.page.html',
  styleUrls: ['./infocomida.page.scss'],
})
export class InfocomidaPage implements OnInit {
  currentUser: any;
  idComida: any;
  comida: any;
  tipoComida: any;
  ocultar = false;



  constructor(
    private service: ApiserviceService,
    private route: Router,
    private activatedRoute: ActivatedRoute,
  ) {

  }

  ngOnInit() {
    this.idComida = this.activatedRoute.snapshot.paramMap.get('id');

    this.getComida();
    this.currentUser = JSON.parse(localStorage.getItem('user'));
    if ((this.currentUser[0]['TipoUsuario']) == '0'){
      this.ocultar = true;
    }

  }


  comprar() {
    this.route.navigate(['/antidacomida',this.idComida]);
  }

  getComida(){
      this.service.getpelicula(this.idComida).subscribe((data: any) => {
          this.comida = data;
      });

  }

  cancelar(){
    this.route.navigate(['/comida']);
  }

  eliminar(){
    //this.service
    this.cancelar();
  }

  modificar(){

    this.route.navigate(['/modificarcomida',this.idComida]);
  }



}
