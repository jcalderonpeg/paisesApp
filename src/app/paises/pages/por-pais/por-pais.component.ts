import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Pais } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [`

    li{
        cursor: pointer; 
      }

    `
  ]
})
export class PorPaisComponent {

  param: string = "";
  siError: boolean = false;
  paises: Pais[] = [];
  paisesSugeridos: Pais[] = [];

  mostrarSugerencias: boolean = false;

  constructor( private paisService: PaisService ){}

  buscar( param: string ){

    this.siError = false;
    this.param = param;
    this.mostrarSugerencias = false;

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
    this.mostrarSugerencias = true;
    this.param = param;

    this.paisService.buscarPais( param )
      .subscribe( resp => this.paisesSugeridos = resp.splice( 0,5 ) );
  }

  buscarSugerencias( param: string ){
    this.buscar(param);
  }

}
