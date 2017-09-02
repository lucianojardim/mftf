import {Injectable} from '@angular/core';

import {Gender} from './gender.model';

@Injectable()
export class GenderService {

  private _elements: Gender[];

  constructor() {
    this._elements = [
      new Gender(1, 'Feminino'),
      new Gender(2, 'Masculino')
    ];
  }

  getAllElements(): Gender[] {
    return this._elements.slice();
  }

  getElementById(id: number): Gender {
    return this._elements.find((element: Gender) => element.id === id);
  }

  getElementByName(name: string): Gender {
    return this._elements.find((element: Gender) => element.name === name);
  }
}
