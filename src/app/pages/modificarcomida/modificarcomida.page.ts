/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable eqeqeq */
import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from './../../apiservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modificarcomida',
  templateUrl: './modificarcomida.page.html',
  styleUrls: ['./modificarcomida.page.scss'],
})
export class ModificarcomidaPage implements OnInit {
  comida: any;
  idComida: any;
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
      this.idComida = this.activatedRoute.snapshot.paramMap.get('id');
      this.cargado = true;
      this.getComida();
      this.registerForm = this.formBuilder.group({
        Nombre: ['', Validators.required],
        idTipoAlimento: ['',Validators.required],
        CantidadDisponible: ['', Validators.required],
        Precio: ['',Validators.required],
      });
    }
  }


getComida(){
    this.service.getpelicula(this.idComida).subscribe((data: any) => {
        this.comida = data;
        this.registerForm.controls['Nombre'].setValue(data[0].Nombre);
        this.registerForm.controls['idTipoAlimento'].setValue(data[0].idTipoAlimento);
        this.registerForm.controls['CantidadDisponible'].setValue(data[0].CantidadDisponible);
        this.registerForm.controls['Precio'].setValue(data[0].Precio);
    });
}

cancelar(){
  this.route.navigate(['/infocomida',this.idComida]);
}

modificar(){
  //api upgrade
}

}
