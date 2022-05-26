/* eslint-disable no-trailing-spaces */
/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable eqeqeq */
import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from './../../apiservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-modificarpeli',
  templateUrl: './modificarpeli.page.html',
  styleUrls: ['./modificarpeli.page.scss'],
})
export class ModificarpeliPage implements OnInit {
  infoPeli: any;
  movie: any;
  idpelicula: any;
  registerForm: FormGroup;

  constructor(
    private service: ApiserviceService,
    private route: Router,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    public alertController: AlertController,
  ) { }

  ngOnInit() {
      this.idpelicula = this.activatedRoute.snapshot.paramMap.get('id');
      this.getPelicula();
      this.registerForm = this.formBuilder.group({
        Titulo: ['', Validators.required],
        Director: ['', Validators.required],
        YearPublicacion: ['', Validators.required],
        EdadRequerida: ['', Validators.required],
        URL: ['', [Validators.required]],
        idPelicula: ['', [Validators.required]],
        Actores: ['', [Validators.required]],
        Generos: ['', [Validators.required]],
        Duracion: ['', [Validators.required]],
        Idiomas: ['', [Validators.required]],
        Activo: ['1', Validators.required],
      });

  }


getPelicula(){
    this.service.getpelicula(this.idpelicula).subscribe((data: any) => {
        this.movie = data;
        this.registerForm.controls['Titulo'].setValue(data[0].Titulo);
        this.registerForm.controls['Director'].setValue(data[0].Director);
        this.registerForm.controls['YearPublicacion'].setValue(data[0].YearPublicacion);
        this.registerForm.controls['EdadRequerida'].setValue(data[0].EdadRequerida);
        this.registerForm.controls['URL'].setValue(data[0].URL);
        this.registerForm.controls['idPelicula'].setValue(data[0].idPelicula);
        this.registerForm.controls['Actores'].setValue(data[0].Actores);
        this.registerForm.controls['Generos'].setValue(data[0].Generos);
        this.registerForm.controls['Duracion'].setValue(data[0].Duracion);
        this.registerForm.controls['Idiomas'].setValue(data[0].Idiomas);
    });
}

cancelar(){
  this.route.navigate(['/pelicula',this.idpelicula]);
}

modificar(){
  this.service.changePelicula(this.registerForm.value).subscribe(
    (data) => {
      this.modificacionExitoso();
    },
    (error) => {

      this.modificacionFallida();
    }
  );
}

async modificacionExitoso() {
  const alert = await this.alertController.create({
    cssClass: 'my-custom-class',
    header: 'Modificacion Exitosa',
    message: 'Usted se dirigira al menu de peliculas.',
    buttons: [
      {
        text: 'OK',
        cssClass: 'secondary',
        id: 'ok-button',
        handler: (blah) => {
          this.route.navigate(['/principal']).then(() => {
            window.location.reload();
          });

        }
      }
    ]
  });
  await alert.present();

}

async modificacionFallida() {
  const alert = await this.alertController.create({
    cssClass: 'my-custom-class',
    header: 'Modificaion Fallida',
    message: 'ha ocurrido un error vuelva a intentarlo',
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
