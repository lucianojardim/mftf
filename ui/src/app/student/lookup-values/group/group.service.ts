import {Injectable} from '@angular/core';

import {Group} from './group.model';

@Injectable()
export class GroupService {

  private _elements: Group[];

  constructor() {
    this._elements = [
      new Group(1, 'C'),
    ];
  }

  getAllElements(): Group[] {
    return this._elements.slice();
  }

  getElementById(id: number): Group {
    return this._elements.find((element: Group) => element.id === id);
  }

  getElementByName(name: string): Group {
    return this._elements.find((element: Group) => element.name === name);
  }
}
