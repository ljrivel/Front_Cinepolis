import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})



export class HomePage implements OnInit{

  constructor(
    private route: Router
    ) {

    }

  ngOnInit(): void {
    }


  login() {
    this.route.navigate(['/login']);
  }

  register() {
    this.route.navigate(['/register']);
  }
}
