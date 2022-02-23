import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(public modalCtrl: ModalController,) { }

  ngOnInit() {
  }

  register(){

  }

  async dismiss() {
    await this.modalCtrl.dismiss();
  }
}
