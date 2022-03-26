/* eslint-disable @typescript-eslint/dot-notation */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ApiserviceService } from './../../apiservice.service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.page.html',
  styleUrls: ['./historial.page.scss'],
})
export class HistorialPage implements OnInit {
  usuario: any;
  historial: any;
  constructor(
    private service: ApiserviceService,
    private route: Router,
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
    this.usuario = JSON.parse(localStorage.getItem('user'));
    this.getHistorial();
  }

  volver(){
    this.route.navigate(['/perfil']).then(() => {
      window.location.reload();
    });
  }

  getHistorial(){
    this.service.getHistorial(this.usuario[0]['idUsuario']).subscribe(data =>{
      this.historial = data[0];
      console.log(this.historial);
    });
  }


  historialCompleto(orden: any){
    this.route.navigate(['/historial-detallado',orden]).then(() => {
      window.location.reload();
    });
  }

}
