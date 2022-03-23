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

          this.service.getUser(this.loginForm.value).subscribe(
            (data2) => {
              this.service.setUser(data2);
            }
          );
          this.presentAlert();
          this.route.navigate(['/principal']);
        }
        else{
          console.log('error');
        }
      },
      (error) => {
        console.log('error');
      }
    );
  }
  dismiss(){
    this.route.navigate(['/home']);
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['OK']
    });}


}
