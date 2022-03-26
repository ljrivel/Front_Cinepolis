/* eslint-disable no-trailing-spaces */
/* eslint-disable eqeqeq */
/* eslint-disable @typescript-eslint/dot-notation */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ApiserviceService } from './../../apiservice.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  usuario: any;
  productos: any;

  constructor(
    private service: ApiserviceService,
    private route: Router,
  ) { }

  ngOnInit() {
    this.usuario = JSON.parse(localStorage.getItem('user'));
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

}
