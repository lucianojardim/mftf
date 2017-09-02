import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { SharedModule } from '../shared/shared.module';

import { StudentRoutingModule } from './student-routing.module';

import { StudentListComponent } from './student-list/student-list.component';
import { StudentComponent } from './student/student.component';
import {StudentDetailComponent} from './student-detail/student-detail.component';

@NgModule({
  imports: [
    HttpModule,
    SharedModule,
    StudentRoutingModule
  ],
  declarations: [
      StudentListComponent,
    StudentComponent,
    StudentDetailComponent
  ]
})
export class StudentModule { }
