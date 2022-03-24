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
  cargado = false;
  registerForm: FormGroup;

  constructor(
    private service: ApiserviceService,
    private route: Router,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    public alertController: AlertController,
  ) { }

  ngOnInit() {
    if(this.cargado == false){
      this.idpelicula = this.activatedRoute.snapshot.paramMap.get('id');
      this.cargado = true;
      this.getPelicula();
      this.registerForm = this.formBuilder.group({
        Titulo: ['', Validators.required],
        Director: ['', Validators.required],
        YearPublicacion: ['', Validators.required],
        EdadRequerida: ['', Validators.required],
        URL: ['', [Validators.required]],
        idPelicula: ['', [Validators.required]],
      });
    }
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
    message: 'Usted se dirigira al menu de clientes.',
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
