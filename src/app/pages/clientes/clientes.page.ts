/* eslint-disable no-trailing-spaces */
/* eslint-disable eqeqeq */
/* eslint-disable @typescript-eslint/dot-notation */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { format, parseISO } from 'date-fns';
import { ApiserviceService } from './../../apiservice.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.page.html',
  styleUrls: ['./clientes.page.scss'],
})
export class ClientesPage implements OnInit {

  currentUser: any;
  allClientes: any;
  fecha: any;


  constructor(
    private service: ApiserviceService,
    private route: Router,
    public alertController: AlertController,
    ) {
    }
  // eslint-disable-next-line @typescript-eslint/member-ordering
  option = {
    slidesPerView: 1.5,
    centeredslides: true,
    //loop: true,
    spaceBetween: 5,
    // autoplay:true,
  };

  ngOnInit(): void {
    this.allClientes = '';
    this.getClientes();


  }

  getClientes() {
    this.service.getUsers().subscribe((data: any) => {
      this.allClientes = data;
      this.fecha = this.formatDate(data[0].FechaNacimiento);
    });

  }

  principal() {
    this.route.navigate(['/principal']);
  }



  comida() {
    this.route.navigate(['/comida']);
  }

  clientes() {
    this.route.navigate(['/clientes']);
  }

  cliente(idCliente: any){
    this.route.navigate(['/pelicula',idCliente]);
  }

  agregarCliente(){
    this.route.navigate(['/crearclientes']);
  }

  formatDate(value: string) {
    return format(parseISO(value), 'MMM dd yyyy');
  }

  modificarCliente(id: any){
    this.route.navigate(['/modificar-cliente',id]);
  }

  eliminar(id: any){
    this.service.deleteUser(id).subscribe(
      (data) => {
        this.eliminacionExitoso();
      },
      (error) => {
        this.eliminacionFallida();
      }
    );
  }

  async eliminacionExitoso() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Modificacion Exitosa',
      message: 'Usted se dirigira al menu de clientes.',
      buttons: [
        {
          text: 'OK',
          cssClass: 'secondary',
          id: 'ok-button',
          handler: (blah) => {
            window.location.reload();
          }
        }
      ]
    });
    await alert.present();

  }

  async eliminacionFallida() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Elimacion Fallida',
      message: 'ha ocurrido un error vuelva a intentarlo',
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

}
