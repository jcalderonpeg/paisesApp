import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Pais } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html'
})
export class PorPaisComponent {

  param: string = "";
  siError: boolean = false;
  paises: Pais[] = [];

  constructor( private paisService: PaisService ){}

  buscar( param: string ){

    this.siError = false;
    this.param = param;

    this.paisService.buscarPais( this.param )
      .subscribe({
        next:   ( resp ) => {
                  console.log( resp );
                  this.paises = resp;
                },
        error:  ( err ) => {
                  this.siError = true;
                  this.paises = []
                }
      })  
  }

  sugerencias( param: string ){
    this.siError = false;
  }

}
