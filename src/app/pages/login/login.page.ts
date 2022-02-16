import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../../apiservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private service: ApiserviceService,
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
