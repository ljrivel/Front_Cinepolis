/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable eqeqeq */
import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from './../../apiservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modificarpeli',
  templateUrl: './modificarpeli.page.html',
  styleUrls: ['./modificarpeli.page.scss'],
})
export class ModificarpeliPage implements OnInit {
  infoPeli: any;
  movie: any;
  idPelicula: any;
  cargado = false;
  registerForm: FormGroup;

  constructor(
    private service: ApiserviceService,
    private route: Router,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    if(this.cargado == false){
      this.idPelicula = this.activatedRoute.snapshot.paramMap.get('id');
      this.cargado = true;
      this.getPelicula();
      this.registerForm = this.formBuilder.group({
        Titulo: ['', Validators.required],
        Director: ['', Validators.required],
        YearPublicacion: ['', Validators.required],
        EdadRequerida: ['', Validators.required],
        URL: ['', [Validators.required]],
      });
    }
  }


getPelicula(){
    this.service.getpelicula(this.idPelicula).subscribe((data: any) => {
        this.movie = data;
        this.registerForm.controls['Titulo'].setValue(data[0].Titulo);
        this.registerForm.controls['Director'].setValue(data[0].Director);
        this.registerForm.controls['YearPublicacion'].setValue(data[0].YearPublicacion);
        this.registerForm.controls['EdadRequerida'].setValue(data[0].EdadRequerida);
        this.registerForm.controls['URL'].setValue(data[0].URL);
    });
}

cancelar(){
  this.route.navigate(['/pelicula',this.idPelicula]);
}

modificar(){
  //api upgrade
}



}
