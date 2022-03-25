/* eslint-disable eqeqeq */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ApiserviceService } from './../../apiservice.service';

@Component({
  selector: 'app-cantidacomida',
  templateUrl: './cantidacomida.page.html',
  styleUrls: ['./cantidacomida.page.scss'],
})
export class CantidacomidaPage implements OnInit {

  producto: any;
  idProducto: any;
  cantidad = 0;
  constructor(
    private service: ApiserviceService,
    private route: Router,
    private activatedRoute: ActivatedRoute,) { }

  ngOnInit() {
    this.idProducto = this.activatedRoute.snapshot.paramMap.get('id');
    this.getProducto();
  }

  less(){
    if(this.cantidad != 0){
      this.cantidad --;
    }
  }

  add(){
    if(this.cantidad != 0){
      this.cantidad ++;
    }
  }

  getProducto(){
    this.service.getproducto(this.idProducto).subscribe((data: any) => {
      this.producto = data;
    });
  }

}
