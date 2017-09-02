import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { StudentModule } from './student/student.module';

import { AppComponent } from './app.component';

import {GenderService} from './student/lookup-values/gender/gender.service';
import {CityService} from './student/lookup-values/city/city.service';
import {CountryService} from './student/lookup-values/country/country.service';
import {EducationCenterService} from './shared/education-center/education-center.service';
import {EnrollmentStatusService} from './student/lookup-values/enrollment-status/enrollment-status.service';
import {GroupService} from './student/lookup-values/group/group.service';
import {RaceService} from './student/lookup-values/race/race.service';
import {SchoolingService} from './student/lookup-values/schooling/schooling.service';
import {StateService} from './student/lookup-values/state/state.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
    StudentModule
  ],
  providers: [
    CityService,
    CountryService,
    EducationCenterService,
    EnrollmentStatusService,
    GenderService,
    GroupService,
    RaceService,
    SchoolingService,
    StateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
