import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {StudentListComponent} from './student-list/student-list.component';
import {StudentDetailComponent} from './student-detail/student-detail.component';
import {StudentComponent} from './student/student.component';

import {AuthGuardService} from '../shared/auth/auth-guard.service';

const studentRoutes: Routes = [
  {
    path: '', component: StudentListComponent
  },
  // {
  //   path: 'detail', component: StudentDetailComponent, children: [
  //   {path: ':studentId', component: StudentComponent}
  // ]
  // },
  {
    path: 'add', canActivate: [AuthGuardService], component: StudentDetailComponent
  },
  {
    path: 'delete/:studentId', canActivate: [AuthGuardService], component: StudentComponent
  },
  {
    path: 'detail/:studentId', canActivate: [AuthGuardService], component: StudentComponent
  },
  {
    path: 'update/:studentId', canActivate: [AuthGuardService], component: StudentDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(studentRoutes)],
  exports: [RouterModule]
})
export class StudentRoutingModule {
}
