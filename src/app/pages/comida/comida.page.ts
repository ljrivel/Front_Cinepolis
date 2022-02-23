import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiserviceService } from './../../apiservice.service';

@Component({
  selector: 'app-comida',
  templateUrl: './comida.page.html',
  styleUrls: ['./comida.page.scss'],
})
export class ComidaPage implements OnInit {

  constructor(
    private service: ApiserviceService,
    private route: Router
  ) { }

  ngOnInit() {
  }

  comprar() {
    this.route.navigate(['/comprar']);
  }
}
