import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ApiserviceService } from './../../apiservice.service';

@Component({
  selector: 'app-historial-detallado',
  templateUrl: './historial-detallado.page.html',
  styleUrls: ['./historial-detallado.page.scss'],
})
export class HistorialDetalladoPage implements OnInit {

  id: any;
  compra: any;

  constructor(
    private service: ApiserviceService,
    private route: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

          // eslint-disable-next-line @typescript-eslint/member-ordering
          option = {
            slidesPerView: 1.5,
            centeredslides: true,
            //loop: true,
            spaceBetween: 5,
            // autoplay:true,
          };

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.getCompra();

  }


  getCompra(){
    this.service.getCompra(this.id).subscribe((data: any) => {
        console.log(data);
    });

}
volver(){
  this.route.navigate(['/perfil']).then(() => {
    window.location.reload();
  });
}

}
