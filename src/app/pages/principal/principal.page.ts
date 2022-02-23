import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiserviceService } from './../../apiservice.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {
    allmovies: any;
    resultado: any;
    constructor(
      private service: ApiserviceService,
      private route: Router
      ) {
        this.service.getspelicula().subscribe(
          (respuesta) =>{
            this.resultado = JSON.stringify(respuesta);
          }
        );
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

}
