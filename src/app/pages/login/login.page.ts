/* eslint-disable no-trailing-spaces */
/* eslint-disable eqeqeq */
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiserviceService } from './../../apiservice.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;

  constructor(
    private route: Router,
    private service: ApiserviceService,
    private formBuilder: FormBuilder,
    public alertController: AlertController,
    ) {
      this.loginForm = this.formBuilder.group({
        Usuario: ['', [Validators.required,Validators.email]],
        Password : ['',[Validators.required,Validators.minLength(6)]]
      });
   }
  ngOnInit() {
  }

  login(){
    this.service.login(this.loginForm.value).subscribe(
      (data) => {

        if(data == true){

          this.service.getUserLogin(this.loginForm.value).subscribe(
            (data2) => {
              this.service.setUser(data2);
            }
          );
          this.loginExitoso();

        }
        else{
          this.loginFallido();
          console.log('error');
        }
      },
      (error) => {
        this.loginFallido();
        console.log('error');
      }
    );
  }
  dismiss(){
    this.route.navigate(['/home']);
  }

  async loginExitoso() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Login Exitoso',
      message: 'Ha iniciado sesion.',
      buttons: [
        {
          text: 'OK',
          cssClass: 'secondary',
          id: 'ok-button',
          handler: (blah) => {
            this.route.navigate(['/principal']);
          }
        }
      ]
    });
    await alert.present();

  }

  async loginFallido() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Login Fallido',
      message: 'Porfavor verifique los datos',
      buttons: [
        {
          text: 'OK',
          cssClass: 'secondary',
          id: 'ok-button',
        }
      ]
    });
    await alert.present();

  }


}
