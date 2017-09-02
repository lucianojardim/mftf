import {Injectable} from '@angular/core';

import {Schooling} from './schooling.model';

@Injectable()
export class SchoolingService {

  private _elements: Schooling[];

  constructor() {
    this._elements = [
      new Schooling(1, 'Outro'),
      new Schooling(2, 'Ensino Medio'),
      new Schooling(3, 'Bacharelado'),
      new Schooling(4, 'Pos-graduacao')
    ];
  }

  getAllElements(): Schooling[] {
    return this._elements.slice();
  }

  getElementById(id: number): Schooling {
    return this._elements.find((element: Schooling) => element.id === id);
  }

  getElementByName(name: string): Schooling {
    return this._elements.find((element: Schooling) => element.name === name);
  }
}
