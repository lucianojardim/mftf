import {Injectable} from '@angular/core';

import {Race} from './race.model';

@Injectable()
export class RaceService {

  private _elements: Race[];

  constructor() {
    this._elements = [
      new Race(1, 'Miscigenado'),
      new Race(2, 'Negro'),
      new Race(3, 'Branco'),
      new Race(4, 'Indigena'),
      new Race(5, 'Outro')
    ];
  }

  getAllElements(): Race[] {
    return this._elements.slice();
  }

  getElementById(id: number): Race {
    return this._elements.find((element: Race) => element.id === id);
  }

  getElementByName(name: string): Race {
    return this._elements.find((element: Race) => element.name === name);
  }
}
