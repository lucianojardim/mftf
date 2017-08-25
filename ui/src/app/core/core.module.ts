import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { AuthGuardService } from '../shared/auth-guard.service';
import { UserService } from '../shared/user/user.service';
import { StudentService } from '../student/student.service';

import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    FormsModule,
    SharedModule
  ],
  exports: [
  ],
  providers: [
    AuthGuardService,
    UserService,
    StudentService
  ],
})
export class CoreModule { }
