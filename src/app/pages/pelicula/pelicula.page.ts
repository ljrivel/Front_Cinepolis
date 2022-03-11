import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiserviceService } from './../../apiservice.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.page.html',
  styleUrls: ['./pelicula.page.scss'],
})
export class PeliculaPage implements OnInit {
  movieName: any;

  constructor(
    private service: ApiserviceService,
    private route: Router,
    private activatedRoute: ActivatedRoute,
  ) {

  }

  ngOnInit() {
    this.movieName = this.activatedRoute.snapshot.paramMap.get('name');
  }


  comprar() {
    this.route.navigate(['/comprar-comida']);
  }

}
