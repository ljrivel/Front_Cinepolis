import { ApiserviceService } from './../apiservice.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  resultado: any;
  constructor(private service: ApiserviceService) {
      this.service.try().subscribe(
        (respuesta) =>{
          this.resultado = JSON.stringify(respuesta);
        }
      );

  }

}
