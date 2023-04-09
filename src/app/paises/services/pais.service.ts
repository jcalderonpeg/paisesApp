import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pais } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private urlBase: string = "https://restcountries.com/v3.1";

  get httpParams(){
    return new HttpParams().set('fields', 'capital,name,population,cca2,flags');
  }


  constructor( private http: HttpClient ) { }

  buscarPais( param: string ): Observable<Pais[]>{
    const url = `${ this.urlBase }/name/${ param }`;    
    return this.http.get<Pais[]>( url, { params: this.httpParams } );
  }

  buscarCapital( param: string ): Observable<Pais[]>{
    const url = `${ this.urlBase }/capital/${ param }`;    
    return this.http.get<Pais[]>( url, { params: this.httpParams } );
  }

  getPaisbyCodigo( codigo: string ): Observable<Pais[]>{
    const url = `${ this.urlBase }/alpha/${ codigo }`;
    return this.http.get<Pais[]>( url );
  }

  buscarPaisbyRegion( param: string ): Observable<Pais[]>{
    const url = `${ this.urlBase }/region/${ param }`;    
    return this.http.get<Pais[]>( url, { params: this.httpParams } );
  }

}
