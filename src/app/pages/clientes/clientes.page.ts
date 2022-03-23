/* eslint-disable no-trailing-spaces */
/* eslint-disable eqeqeq */
/* eslint-disable @typescript-eslint/dot-notation */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { format, parseISO } from 'date-fns';
import { ApiserviceService } from './../../apiservice.service';

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
    private route: Router
    ) {}
  // eslint-disable-next-line @typescript-eslint/member-ordering
  option = {
    slidesPerView: 1.5,
    centeredslides: true,
    loop: true,
    spaceBetween: 5,
    // autoplay:true,
  };

  ngOnInit(): void {
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
    //this.service
    window.location.reload();
  }

}
