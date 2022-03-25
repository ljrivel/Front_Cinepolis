import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ApiserviceService } from './../../apiservice.service';

@Component({
  selector: 'app-seleccionaragregar',
  templateUrl: './seleccionaragregar.page.html',
  styleUrls: ['./seleccionaragregar.page.scss'],
})
export class SeleccionaragregarPage implements OnInit {
  allmovies: any;
  idPelicula: any;

  constructor(
    private service: ApiserviceService,
    private route: Router
  ) { }

      // eslint-disable-next-line @typescript-eslint/member-ordering
      option = {
        slidesPerView: 1.5,
        centeredslides: true,
        //loop: true,
        spaceBetween: 5,
        // autoplay:true,
      };

  ngOnInit() {
    this.getPelis();
  }


  getPelis() {
    this.service.getspelicula().subscribe((data: any) => {
      this.allmovies = data;
    });

  }

  cartelera(id: any){
    this.route.navigate(['/agregar-cartelera',id]).then(() => {
      window.location.reload();
    });
  }

  cancelar(){
    this.route.navigate(['/principal']).then(() => {
      window.location.reload();
    });
  }

}
