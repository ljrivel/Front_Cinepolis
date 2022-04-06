/* eslint-disable no-trailing-spaces */
/* eslint-disable eqeqeq */
/* eslint-disable @typescript-eslint/dot-notation */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiserviceService } from './../../apiservice.service';

@Component({
  selector: 'app-comida',
  templateUrl: './comida.page.html',
  styleUrls: ['./comida.page.scss'],
})
export class ComidaPage implements OnInit {
  ocultar = false;
  searchTerm: string;
  currentUser: any;
  allcomida: any;
  tamano: any;
  textbuscar = '';
  constructor(
    private service: ApiserviceService,
    private route: Router
  ) { }

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('user'));
    if ((this.currentUser[0]['TipoUsuario']) == '0'){
      this.ocultar = true;
    }
    this.getComida();
  }
      // eslint-disable-next-line @typescript-eslint/member-ordering
      option = {
        slidesPerView: 1.5,
        centeredslides: true,
        //loop: true,
        spaceBetween: 5,
        // autoplay:true,
      };


  getComida(){
    this.service.getscomida().subscribe((data: any) => {
      this.allcomida = data;
      this.tamano = data.length;
      for(let i =0; i < this.tamano; i++){
        this.tipo(data[i]['TipoProducto'],data[i]['idProducto']);
      }
    });
  }

  comprar(id: any) {
    if(this.ocultar == true){
      this.route.navigate(['/compra-comida',id]).then(() => {
        window.location.reload();
      });
    }
    else{
      this.route.navigate(['/cantidadcomida',id]).then(() => {
        window.location.reload();
      });
    }

  }

  getID(id: any){
    for(let i =0; i < this.tamano; i++){
      if(this.allcomida[i]['idProducto'] ==  id){
        return i;
      }
    }
  }

  tipo(type: any,id: any){

    const ID = this.getID(id);


    if(type == 0){
      this.allcomida[ID]['TipoProducto'] = 'Combo';
      return  'Combo';
    }

    else if(type == 1){
      this.allcomida[ID]['TipoProducto'] = 'Bebida';

      return  'Bebida';
    }
    else{
      this.allcomida[ID]['TipoProducto'] = 'Comida';
       return  'Comida';
    }
  }

  buscar( event ){
    this.textbuscar = event.detail.value;
  }

  principal() {
    this.route.navigate(['/principal']).then(() => {
      window.location.reload();
    });
  }

  perfil() {
    this.route.navigate(['/perfil']).then(() => {
      window.location.reload();
    });
  }

  comida() {
    this.route.navigate(['/comida']).then(() => {
      window.location.reload();
    });
  }

  agregarComida(){
    this.route.navigate(['/crearcomida']).then(() => {
      window.location.reload();
    });
  }
  clientes() {
    this.route.navigate(['/clientes']);
  }

}
