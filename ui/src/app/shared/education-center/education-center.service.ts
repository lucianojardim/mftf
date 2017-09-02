import {Injectable} from '@angular/core';
import {EducationCenter} from './education-center.model';

@Injectable()
export class EducationCenterService {

  private _elements: EducationCenter[];

  constructor() {
    this._elements = [
      new EducationCenter(1, 'Efata')
    ];
  }

  getAllElements(): EducationCenter[] {
    return this._elements.slice();
  }

  getElementById(id: number): EducationCenter {
    return this._elements.find((element: EducationCenter) => element.id === id);
  }

  getElementByName(name: string): EducationCenter {
    return this._elements.find((element: EducationCenter) => element.name === name);
  }
}
