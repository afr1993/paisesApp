 import { Injectable } from '@angular/core';
 import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { Paises } from '../interfaces/paises';

 @Injectable({providedIn: 'root'})
 export class PaisesService {

  private apiUrl: string = 'https://restcountries.com/v3.1/'

  constructor(private http: HttpClient) { }

  searchCountryByAlphaCode( code:string ): Observable<Paises[]>{
    const url =`${ this.apiUrl }/alpha/${ code }`;
    return this.http.get<Paises[]>( url)
    .pipe(          //of rjxs sirve para construir un observable basandose en el argumento
      catchError( () => of([]))
    );
  }

  searchByCountry(){

  }

  searchCapital( term: string): Observable <Paises[]>{
      const url =`${ this.apiUrl }/capital/${ term }`;
      return this.http.get<Paises[]>( url)
      .pipe(          //of rjxs sirve para construir un observable basandose en el argumento
        catchError( () => of([]))
      );
  }

  searchCountry( term: string): Observable <Paises[]>{
    const url =`${ this.apiUrl }/name/${ term }`;
    return this.http.get<Paises[]>( url)
    .pipe(          //of rjxs sirve para construir un observable basandose en el argumento
      catchError( () => of([]))
    );
}

searchRegion( term: string): Observable <Paises[]>{
  const url =`${ this.apiUrl }/region/${ term }`;
  return this.http.get<Paises[]>( url)
  .pipe(          //of rjxs sirve para construir un observable basandose en el argumento
    catchError( () => of([]))
  );
}

 }
