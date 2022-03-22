/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiserviceService } from 'src/app/apiservice.service';

@Component({
  selector: 'app-crearpelicula',
  templateUrl: './crearpelicula.page.html',
  styleUrls: ['./crearpelicula.page.scss'],
})
export class CrearpeliculaPage implements OnInit {
  registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private route: Router,
    private service: ApiserviceService,) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      Titulo: ['', Validators.required],
      Director: ['', Validators.required],
      YearPublicacion: ['', Validators.required],
      EdadRequerida: ['', Validators.required],
      URL: ['', [Validators.required]],
    });
  }

  try(){
    console.log(this.registerForm);
  }
  cancelar(){
    this.route.navigate(['/principal']);
  }

}
