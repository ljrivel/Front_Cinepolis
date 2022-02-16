import { ApiserviceService } from './../apiservice.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})



export class HomePage {
  resultado: any;
  constructor(
    private service: ApiserviceService,
    private route: Router
    ) {
      this.service.try().subscribe(
        (respuesta) =>{
          this.resultado = JSON.stringify(respuesta);
        }
      );

  }

  movies() {
    this.route.navigate(['/home']);
  }

  login() {
    this.route.navigate(['/login']);
  }

  tickets() {
    this.route.navigate(['/tickets']);
  }


}
