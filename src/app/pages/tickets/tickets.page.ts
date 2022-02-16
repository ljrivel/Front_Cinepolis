import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../../apiservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.page.html',
  styleUrls: ['./tickets.page.scss'],
})
export class TicketsPage implements OnInit {

  constructor(
    private service: ApiserviceService,
    private route: Router
  ) { }

  ngOnInit() {
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
