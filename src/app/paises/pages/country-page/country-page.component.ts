import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: [
  ]
})
export class CountryPageComponent implements OnInit {

  constructor( private activatedRoute: ActivatedRoute,
              private paisesService:PaisesService
            ){}


  ngOnInit(): void {
    this.activatedRoute.params
    .subscribe( ({ id }) => {

    this.paisesService.searchCountryByAlphaCode(id)
      .subscribe( country => {
        console.log({ country })
      });

    });
  }

}
