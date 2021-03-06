import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {FormsModule} from '@angular/forms';
import {DateValueAccessorModule} from 'angular-date-value-accessor';

import { SharedModule } from '../shared/shared.module';

import { StudentRoutingModule } from './student-routing.module';

import { StudentListComponent } from './student-list/student-list.component';
import { StudentComponent } from './student/student.component';
import {StudentDetailComponent} from './student-detail/student-detail.component';

@NgModule({
  imports: [
    HttpModule,
    FormsModule,
    SharedModule,
    StudentRoutingModule,
    DateValueAccessorModule // contributed module to allow input type=date and ngModel work together
  ],
  declarations: [
    StudentListComponent,
    StudentComponent,
    StudentDetailComponent
  ]
})
export class StudentModule { }
