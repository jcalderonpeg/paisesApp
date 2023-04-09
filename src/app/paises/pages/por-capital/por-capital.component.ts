import { Component } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html'
})
export class PorCapitalComponent {

  param: string = "";
  siError: boolean = false;
  paises: Pais[] = [];

  constructor( private paisService: PaisService ){}

  buscar( param: string ){

    this.siError = false;
    this.param = param;

    this.paisService.buscarCapital( this.param )
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
}
