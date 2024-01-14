import { Component } from '@angular/core';
import { PaisesService } from '../../services/paises.service';
import { Paises } from '../../interfaces/paises';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent {

  public paises:Paises[] = [];

  constructor( private paisesService: PaisesService ){}

  searchByRegion (term :string):void{
                                      //El suscribe es para que la peticion puede realizar la peticion
    this.paisesService.searchRegion( term )
     .subscribe(paises => {
      this.paises = paises;
    });

  }

}
