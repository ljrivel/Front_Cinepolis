/* eslint-disable arrow-body-style */
/* eslint-disable @typescript-eslint/semi */
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(arreglo: any[], texto: string): any[] {

    if( texto === ''){
      return arreglo;
    }

    texto = texto.toString().toLowerCase();

    return arreglo.filter( item => {
      return item.TipoProducto.toString().toLowerCase().includes( texto );
    });

  }

}
