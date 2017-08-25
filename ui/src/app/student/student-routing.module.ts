import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentListComponent } from './student-list/student-list.component';
import { StudentComponent } from './student/student.component';

const studentRoutes: Routes = [
  {
    path: '', component: StudentListComponent, children: [
    { path: ':studentId', component: StudentComponent }
  ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(studentRoutes)],
  exports: [RouterModule]
})
export class StudentRoutingModule {}
