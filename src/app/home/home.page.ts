import { Component,OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LoginPage } from '../pages/login/login.page';
import { RegisterPage } from '../pages/register/register.page';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})



export class HomePage implements OnInit{

  constructor(
    public modalCtrl: ModalController,
    ) {

    }

  ngOnInit(): void {
    }


  async login() {
    const modal = await this.modalCtrl.create({
      component: LoginPage,
      animated: true,
      mode: 'md',
      backdropDismiss: false,
      cssClass: 'login-modal',
    });

    return await modal.present();
  }

  async register() {
    const modal = await this.modalCtrl.create({
      component: RegisterPage,
      animated: true,
      mode: 'ios',
      backdropDismiss: false,
      cssClass: 'register-modal',
    });

    return await modal.present();
  }
}
