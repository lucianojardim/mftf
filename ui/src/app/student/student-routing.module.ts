import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {StudentListComponent} from './student-list/student-list.component';
import {StudentDetailComponent} from './student-detail/student-detail.component';
import {StudentComponent} from './student/student.component';

const studentRoutes: Routes = [
  {
    path: '', component: StudentListComponent
  },
  {
    path: 'detail', component: StudentDetailComponent, children: [
    {path: ':studentId', component: StudentComponent}
  ]
  },
  {
    path: 'add', component: StudentDetailComponent
  },
  {
    path: 'delete', component: StudentDetailComponent, children: [
    {path: ':studentId', component: StudentComponent}
  ]
  },
  {
    path: 'update', component: StudentDetailComponent, children: [
    {path: ':studentId', component: StudentComponent}
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(studentRoutes)],
  exports: [RouterModule]
})
export class StudentRoutingModule {
}
