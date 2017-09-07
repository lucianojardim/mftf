import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from "rxjs/Observable";

import {StudentService} from '../student.service';
import {Student} from '../student.model';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  studentIdParam: Observable<string>;
  studentId: number = 0;
  student: Student;
  err: Error | null | undefined;
  formattedDateBirth: string;
  submitSuccessful: boolean;

  constructor(private _studentService: StudentService,
              private _activatedRoute: ActivatedRoute) {
  }

  async ngOnInit() {
    try {
      await this.findOne(await this.getStudentId())
    } catch (err) {
      this.err = err;
      throw err;
    }
  }

  async getStudentId(): Promise<number> {
    this.studentIdParam = this._activatedRoute.params.map(p => p.studentId);
    await this.studentIdParam.subscribe(
      (p) => this.studentId = +p
    );
    return Promise.resolve(this.studentId);
  }

  async findOne(studentId: number): Promise<void> {
    try {
      this.student = await this._studentService.findOne(studentId);
      this.formattedDateBirth = this.student.dateBirth.toISOString().substring(0, 10);
    } catch (err) {
      this.err = err;
      throw err;
    }
  }

  async onSubmit(f) {
    try {
      this.submitSuccessful = await this._studentService.remove(this.studentId);
    } catch (err) {
      this.err = err;
      throw err;
    }
  }

}
