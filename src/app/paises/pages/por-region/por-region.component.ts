import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Pais } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
    button{
      margin-right: 5px;
    }
  `]
})
export class PorRegionComponent {

  regionBusqueda: string = '';
  regionesVista: string[] = ['África', 'América', 'Asia', 'Europa', 'Oceania'];
  regionActiva: string = '';

  paises: Pais[] = [];

  constructor( private paisService: PaisService ){}

  activarRegion( region: string ){

    if( region === this.regionActiva ){ return; }

    switch( region ){
      case 'África':
        this.regionBusqueda = 'africa';
        break;
      case 'América':
        this.regionBusqueda = 'america';
        break;
      case 'Asia':
        this.regionBusqueda = 'asia';
        break;
      case 'Europa':
        this.regionBusqueda = 'europe';
        break;
      case 'Oceania':
        this.regionBusqueda = 'oceania';
        break;
    }

    this.regionActiva = region;
    this.paises = [];

    this.paisService.buscarPaisbyRegion( this.regionBusqueda )
    .subscribe( resp => this.paises = resp ) 
  }

  getClaseCSSRegionActiva( region: string ){
    return(region === this.regionActiva) ? 'btn btn-primary' : 'btn btn-outline-primary';
  }

}
