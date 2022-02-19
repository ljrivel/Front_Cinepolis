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
