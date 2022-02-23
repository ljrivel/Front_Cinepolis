import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ApiserviceService } from './../../apiservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public modalCtrl: ModalController,) {
   }
  ngOnInit() {
  }

  login(){

  }

  async dismiss() {
    await this.modalCtrl.dismiss();
  }

}
