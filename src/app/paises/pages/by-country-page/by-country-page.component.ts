import { Component } from '@angular/core';
import { PaisesService } from '../../services/paises.service';
import { Paises } from '../../interfaces/paises';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent {

  public paises:Paises[] = [];

  constructor( private paisesService: PaisesService ){}

  searchByCountry (term :string):void{
                                      //El suscribe es para que la peticion puede realizar la peticion
    this.paisesService.searchCountry( term )
     .subscribe(paises => {
      this.paises = paises;
    });

  }


}
