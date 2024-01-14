import { Component, Input } from '@angular/core';
import { Paises } from '../../interfaces/paises';

@Component({
  selector: 'paises-tabla',
  templateUrl: './paises-tabla.component.html',
  styles: [
    `
      img{
        width:25px;
      }
    `
  ]
})
export class PaisesTablaComponent {

  @Input()
  public paises: Paises[] = [];

}
