/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from './../../apiservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { format, parseISO } from 'date-fns';

@Component({
  selector: 'app-agregar-cartelera',
  templateUrl: './agregar-cartelera.page.html',
  styleUrls: ['./agregar-cartelera.page.scss'],
})
export class AgregarCarteleraPage implements OnInit {
  registerForm: FormGroup;
  idpelicula: any;
  dateValue2 = '';

  constructor(
    private service: ApiserviceService,
    private route: Router,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    public alertController: AlertController,
  ) { }

  ngOnInit() {
    this.idpelicula = this.activatedRoute.snapshot.paramMap.get('id');
    this.registerForm = this.formBuilder.group({
      id: [this.idpelicula, Validators.required],
      sala: ['', Validators.required],
      fecha: ['', Validators.required],
    });
  }
  formatDate(value: string) {

    return format(parseISO(value), 'MMM dd yyyy');
  }


}
