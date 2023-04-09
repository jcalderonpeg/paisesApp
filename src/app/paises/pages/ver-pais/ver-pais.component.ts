import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { switchMap, tap } from "rxjs/operators";
import { Pais, Translation } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html'
})
export class VerPaisComponent implements OnInit{
  
  paises!: Pais[];
  pais!: Pais;
  translations!: string[];
  translation!: string;
  
  constructor( private activatedRoute: ActivatedRoute, private paisService: PaisService ){}
  
  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.paisService.getPaisbyCodigo( id ) ),
        tap( console.log )
      )
      .subscribe( paises => {
        console.log( paises );
        this.paises = paises;
        this.pais = paises[0];
      });

  //   this.activatedRoute.params
  //     .subscribe( ({ id }) => {
  //       console.log( id );

  //       this.paisService.getPaisbyCodigo( id )
  //         .subscribe( pais => {
  //           console.log( pais );
  //         });
  //     });
  }

}
