import { Component, OnInit } from '@angular/core';

import { StudentService } from '../student.service';
import { Student } from '../student.model';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  students: Student[] = [];
  allStudents: Student[] = [];
  err: Error | null | undefined;

  filterStudentFirstName: string;
  filterStudentLastName: string;
  filterStudentEducationCenterName: string;

  constructor(private _studentService: StudentService) {
  }

  async ngOnInit() {
    await this.findAll();
  }

  async findAll(): Promise<void> {
    try {
      this.allStudents = await this._studentService.findAll();
      this.students = this.allStudents.slice();
    } catch (err) {
      this.err = err;
    }
  }

  onFilterStudentFirstName(name: string): void {
    this.filterStudentFirstName = name.toLowerCase();
    this.filterStudents();
  }

  onFilterStudentLastName(name: string): void {
    this.filterStudentLastName = name.toLowerCase();
    this.filterStudents();
  }

  onFilterStudentEducationCenterName(name: string): void {
    this.filterStudentEducationCenterName = name.toLowerCase();
    this.filterStudents();
  }

  filterStudents(): void {
    this.students = this.allStudents.filter(
      (student: Student) => {
        const firstName = (this.filterStudentFirstName ? this.filterStudentFirstName : student.firstName);
        const lastName = (this.filterStudentLastName ? this.filterStudentLastName : student.lastName);
        const educationCenter = (this.filterStudentEducationCenterName ?
          this.filterStudentEducationCenterName :
          student.enrollmentMostCurrent.educationCenter.name);
        return student.firstName.toLowerCase().indexOf(firstName.toLowerCase()) >= 0
          && student.lastName.toLowerCase().indexOf(lastName.toLowerCase()) >= 0
          && student.enrollmentMostCurrent.educationCenter.name.toLowerCase().indexOf(educationCenter.toLowerCase()) >= 0
      });
  }

}
