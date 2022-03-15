import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ApiserviceService } from './../../apiservice.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.page.html',
  styleUrls: ['./pelicula.page.scss'],
})
export class PeliculaPage implements OnInit {
  idPelicula: any;
  movie: any;



  constructor(
    private service: ApiserviceService,
    private route: Router,
    private activatedRoute: ActivatedRoute,
  ) {

  }

  ngOnInit() {
    this.idPelicula = this.activatedRoute.snapshot.paramMap.get('id');

    this.getPelicula();

  }


  comprar() {
    this.route.navigate(['/cantidad-tickets']);
  }

  getPelicula(){

      this.service.getpelicula(this.idPelicula).subscribe((data: any) => {
          this.movie = data;
          console.log(data);
      });

  }

  cancelar(){
    this.route.navigate(['/principal']);
  }

}
