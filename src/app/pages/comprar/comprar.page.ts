/* eslint-disable eqeqeq */
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comprar',
  templateUrl: './comprar.page.html',
  styleUrls: ['./comprar.page.scss'],
})
export class ComprarPage implements OnInit {

  color = 'seat';

  constructor() { }

  ngOnInit() {
  }

  p(a: any){
    if(a == 'seat'){
      this.color = 'seat selected';
      this.ngOnInit();
    }
    else if(a == 'seat selected'){
      this.color = 'seat';
      this.ngOnInit();
    }

  }



}
