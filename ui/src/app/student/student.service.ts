import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';

import { Student } from './student.model';

@Injectable()
export class StudentService {
  private studentHostName = 'localhost';
  private studentPortNum = 3000;
  private studentHost: string = this.studentHostName + ':' + this.studentPortNum;
  private url: string = 'http://' + this.studentHost;
  constructor(private _http: Http) { }

  async findAll(): Promise<Student[]> {
    try {
      const response: Response = await this._http.get(this.url + '/students' ).toPromise();
      return response.json() as Student[];
    } catch (err) {
      throw err;
    }
  }

  async findOne(studentId: number): Promise<Student> {
    try {
      const response: Response = await this._http.get(this.url + '/students/' + studentId.toString() ).toPromise();
      return response.json() as Student;
    } catch (err) {
      throw err;
    }

  }

  // async save(student: Student): Promise<boolean> {
  //   const successful = true;
  //   return successful;
  // }
  //
  // async remove(studentId: number): Promise<boolean> {
  //   const successful = true;
  //   return successful;
  // }

}
