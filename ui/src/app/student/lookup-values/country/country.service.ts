import {Injectable} from '@angular/core';

import {Country} from './country.model';

@Injectable()
export class CountryService {

  private _elements: Country[];

  constructor() {
    this._elements = [
      new Country(1, 'Brasil'),
      new Country(2, 'Outro')
    ];
  }

  getAllElements(): Country[] {
    return this._elements.slice();
  }

  getElementById(id: number): Country {
    return this._elements.find((element: Country) => element.id === id);
  }

  getElementByName(name: string): Country {
    return this._elements.find((element: Country) => element.name === name);
  }
}
