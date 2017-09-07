import {Component, OnInit} from '@angular/core';

import {StudentService} from '../student.service';
import {Student} from '../student.model';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  students: Student[] = [];
  err: Error | null | undefined;

  constructor(private _studentService: StudentService) {
  }

  async ngOnInit() {
    await this.findAll();
  }

  async findAll(): Promise<void> {
    try {
      this.students = await this._studentService.findAll();
    } catch (err) {
      this.err = err;
    }
  }

}
