import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiserviceService } from './../../apiservice.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.page.html',
  styleUrls: ['./pelicula.page.scss'],
})
export class PeliculaPage implements OnInit {

  constructor(
    private service: ApiserviceService,
    private route: Router
  ) {

  }

  ngOnInit() {
  }


  comprar() {
    this.route.navigate(['/comprar-comida']);
  }

}
