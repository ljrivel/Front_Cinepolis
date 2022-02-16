import { ApiserviceService } from './../apiservice.service';
import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})



export class HomePage implements OnInit{
  allmovies: any;
  resultado: any;
  constructor(
    private service: ApiserviceService,
    private route: Router
    ) {
      this.service.getsactor().subscribe(
        (respuesta) =>{
          this.resultado = JSON.stringify(respuesta);
        }
      );

  }

  ngOnInit(): void {

    this.getPelis();
  }

  getPelis() {
    this.service.getspelicula().subscribe((data: any) => {
      this.allmovies = data;
    });
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
