import {Injectable} from '@angular/core';
import {EnrollmentStatus} from './enrollment-status.model';

@Injectable()
export class EnrollmentStatusService {

  private _elements: EnrollmentStatus[];

  constructor() {
    this._elements = [
      new EnrollmentStatus(1, 'Digitado'),
      new EnrollmentStatus(2, 'Revisado')
    ];
  }

  getAllElements(): EnrollmentStatus[] {
    return this._elements.slice();
  }

  getElementById(id: number): EnrollmentStatus {
    return this._elements.find((element: EnrollmentStatus) => element.id === id);
  }

  getElementByName(name: string): EnrollmentStatus {
    return this._elements.find((element: EnrollmentStatus) => element.name === name);
  }
}
