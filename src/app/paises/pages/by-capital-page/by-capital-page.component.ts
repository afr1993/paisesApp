import { Component } from '@angular/core';
import { PaisesService } from '../../services/paises.service';
import { Paises } from '../../interfaces/paises';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})
export class ByCapitalPageComponent {

  public paises:Paises[] = [];

  constructor( private paisesService: PaisesService ){}

  searchByCapital (term :string):void{
                                      //El suscribe es para que la peticion puede realizar la peticion
    this.paisesService.searchCapital( term )
     .subscribe(paises => {
      this.paises = paises;
    });

  }


}
