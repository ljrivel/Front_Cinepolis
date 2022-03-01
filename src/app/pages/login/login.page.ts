/* eslint-disable eqeqeq */
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiserviceService } from './../../apiservice.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
    private formBuilder: FormBuilder
    ) {
      this.loginForm = this.formBuilder.group({
        Usuario: ['', Validators.required,Validators.email],
        Password : ['',Validators.required]
      });
   }
  ngOnInit() {
  }

  login(){
    this.service.login(this.loginForm.value).subscribe(
      (data) => {

        if(data == true){
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


}
