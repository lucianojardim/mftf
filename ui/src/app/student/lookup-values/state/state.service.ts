import {Injectable} from '@angular/core';

import {State} from './state.model';

@Injectable()
export class StateService {

  private _elements: State[];

  constructor() {
    this._elements = [
      new State(1, 'Acre'),
      new State(2, 'Alagoas'),
      new State(3, 'Amazonas'),
      new State(4, 'Amap�'),
      new State(5, 'Bahia'),
      new State(6, 'Cear�'),
      new State(7, 'Distrito Federal'),
      new State(8, 'Esp�rito Santo'),
      new State(9, 'Goi�s'),
      new State(10, 'Maranh�o'),
      new State(11, 'Minas Gerais'),
      new State(12, 'Mato Grosso do Sul'),
      new State(13, 'Mato Grosso'),
      new State(14, 'Par�'),
      new State(15, 'Para�ba'),
      new State(16, 'Pernambuco'),
      new State(17, 'Piau�'),
      new State(18, 'Paran�'),
      new State(19, 'Rio de Janeiro'),
      new State(20, 'Rio Grande do Norte'),
      new State(21, 'Rond�nia'),
      new State(22, 'Roraima'),
      new State(23, 'Rio Grande do Sul'),
      new State(24, 'Santa Catarina'),
      new State(25, 'Sergipe'),
      new State(26, 'S�o Paulo'),
      new State(27, 'Tocantins')
    ];
  }

  getAllElements(): State[] {
    return this._elements.slice();
  }

  getElementById(id: number): State {
    return this._elements.find((element: State) => element.id === id);
  }

  getElementByName(name: string): State {
    return this._elements.find((element: State) => element.name === name);
  }
}
