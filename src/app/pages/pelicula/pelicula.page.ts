/* eslint-disable eqeqeq */
/* eslint-disable @typescript-eslint/dot-notation */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiserviceService } from './../../apiservice.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.page.html',
  styleUrls: ['./pelicula.page.scss'],
})
export class PeliculaPage implements OnInit {
  currentUser: any;
  idPelicula: any;
  movie: any;
  ocultar = false;



  constructor(
    private service: ApiserviceService,
    private route: Router,
    private activatedRoute: ActivatedRoute,
    public alertController: AlertController,
  ) {

  }

  ngOnInit() {
    this.idPelicula = this.activatedRoute.snapshot.paramMap.get('id');

    this.getPelicula();
    this.currentUser = JSON.parse(localStorage.getItem('user'));
    if ((this.currentUser[0]['TipoUsuario']) == '0'){
      this.ocultar = true;
    }

  }


  comprar() {
    this.route.navigate(['/cantidad-tickets',this.idPelicula]);
  }

  getPelicula(){

      this.service.getpelicula(this.idPelicula).subscribe((data: any) => {
          this.movie = data;
      });

  }

  cancelar(){
    this.route.navigate(['/principal']);
  }

  eliminar(){
    this.service.deletePelicula(this.idPelicula).subscribe(
      (data) => {
        this.borradoExitoso();
      },
      (error) => {
        this.borradoFallido();
      }
    );
  }

  modificar(){

    this.route.navigate(['/modificarpeli',this.idPelicula]);
  }

  async borradoFallido() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Ha ocurrido un error',
      message: 'Porfavor intentelo denuevo',
      buttons: [
        {
          text: 'OK',
          cssClass: 'secondary',
          id: 'ok-button',
        }
      ]
    });
    await alert.present();

  }

  async borradoExitoso() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Pelicula eliminada',
      message: 'Usted sera dirigido a la pagina principal',
      buttons: [
        {
          text: 'OK',
          cssClass: 'secondary',
          id: 'ok-button',
          handler: (blah) => {
            this.route.navigate(['/principal']).then(() => {
              window.location.reload();
            });
          }
        }
      ]
    });
    await alert.present();

  }



}
