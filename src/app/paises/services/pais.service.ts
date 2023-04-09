import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pais } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private urlBase: string = "https://restcountries.com/v3.1";

  constructor( private http: HttpClient ) { }

  buscarPais( param: string ): Observable<Pais[]>{
    const url = `${ this.urlBase }/name/${ param } `;    
    return this.http.get<Pais[]>( url );
  }

  buscarCapital( param: string ): Observable<Pais[]>{
    const url = `${ this.urlBase }/capital/${ param } `;    
    return this.http.get<Pais[]>( url );
  }

  getPaisbyCodigo( codigo: string ): Observable<Pais[]>{
    const url = `${ this.urlBase }/alpha/${ codigo } `;
    return this.http.get<Pais[]>( url );
  }

}
