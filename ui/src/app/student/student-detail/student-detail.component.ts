import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs/Observable';

import {Student} from '../student.model';
import {Gender} from '../lookup-values/gender/gender.model';
import {Race} from '../lookup-values/race/race.model';

import {StudentService} from '../student.service';
import {GenderService} from '../lookup-values/gender/gender.service';
import {RaceService} from '../lookup-values/race/race.service';
import {CountryService} from '../lookup-values/country/country.service';
import {StateService} from '../lookup-values/state/state.service';
import {CityService} from '../lookup-values/city/city.service';
import {SchoolingService} from '../lookup-values/schooling/schooling.service';
import {EducationCenterService} from '../../shared/education-center/education-center.service';
import {GroupService} from '../lookup-values/group/group.service';
import {EnrollmentStatusService} from '../lookup-values/enrollment-status/enrollment-status.service';
import {City} from '../lookup-values/city/city.model';
import {State} from '../lookup-values/state/state.model';
import {Schooling} from '../lookup-values/schooling/schooling.model';
import {EducationCenter} from '../../shared/education-center/education-center.model';
import {Group} from '../lookup-values/group/group.model';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {
  studentIdParam: Observable<string>;
  studentId: number = 0;

  student: Student;
  genders: Gender[] = [];
  races: Race[] = [];
  cities: City[] = [];
  states: State[] = [];
  schoolings: Schooling[] = [];
  educationCenters: EducationCenter[] = [];
  groups: Group[] = [];
  err: Error | null | undefined;

  // autocomplete for City
  queryBirthPlaceCity: string = '';
  filteredListBirthPlaceCity: string[] = [];
  queryAddressLocalityCity: string = '';
  filteredListAddressLocalityCity: string[] = [];
  cityNames: string[] = [];

  submitSuccessful: boolean;

  constructor(private _studentService: StudentService,
              private _genderService: GenderService,
              private _raceService: RaceService,
              private _countryService: CountryService,
              private _stateService: StateService,
              private _cityService: CityService,
              private _schoolingService: SchoolingService,
              private _educationCenterService: EducationCenterService,
              private _groupService: GroupService,
              private _enrollmentStatusService: EnrollmentStatusService,
              private _activatedRoute: ActivatedRoute) {
  }

  async ngOnInit() {
    try {
      this.setSelectOptions();

      if (this.isActivatedRouteUpdate()) {
        await this.findOne(await this.getStudentId());
      }

      if (this.isActivatedRouteAdd()) {
        this.student = this._studentService.resetStudent();
      }

    } catch (err) {
      this.err = err;
      throw err;
    }
  }

  setSelectOptions(): void {
    this.genders = this._genderService.getAllElements();
    this.races = this._raceService.getAllElements();
    this.cities = this._cityService.getAllElements();
    this.cityNames = this.cities.map((city) => city.name);
    this.states = this._stateService.getAllElements();
    this.schoolings = this._schoolingService.getAllElements();
    this.educationCenters = this._educationCenterService.getAllElements();
    this.groups = this._groupService.getAllElements();
  }

  onSelectedGender() {
  }

  onSelectedRace() {
  }

  onSelectedBirthPlaceCity(cityName: string) {
    this.queryBirthPlaceCity = cityName;
    this.filteredListBirthPlaceCity = [];
    this.student.birthPlaceCity = this._cityService.getElementByName(cityName);
  }

  onSelectedBirthPlaceState() {
  }

  onSelectedAddressLocalityCity(cityName: string) {
    this.queryAddressLocalityCity = cityName;
    this.filteredListAddressLocalityCity = [];
    this.student.addressLocalityCity = this._cityService.getElementByName(cityName);
  }

  onSelectedAddressLocalityState() {
  }

  onSelectedMotherSchooling() {
  }

  onSelectedEnrollmentEducationCenter() {
  }

  onSelectedEnrollmentGroup() {
  }

  async onSubmit(f) {
    try {
      this.submitSuccessful = await this._studentService.save(this.student);
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
      this.queryBirthPlaceCity = this.student.birthPlaceCity.name;
      this.queryAddressLocalityCity = this.student.addressLocalityCity.name;
    } catch (err) {
      this.err = err;
      throw err;
    }
  }

  filterBirthPlaceCity() {
    if (this.queryBirthPlaceCity !== '') {
      this.filteredListBirthPlaceCity = this.cityNames.filter(function (cityName) {
        return cityName.toLowerCase().indexOf(this.queryBirthPlaceCity.toLowerCase()) > -1;
      }.bind(this));
    } else {
      this.filteredListBirthPlaceCity = [];
    }
  }

  filterAddressLocalityCity() {
    if (this.queryAddressLocalityCity !== '') {
      this.filteredListAddressLocalityCity = this.cityNames.filter(function (cityName) {
        return cityName.toLowerCase().indexOf(this.queryAddressLocalityCity.toLowerCase()) > -1;
      }.bind(this));
    } else {
      this.filteredListAddressLocalityCity = [];
    }
  }

  isActivatedRouteUpdate(): boolean {
    return this._activatedRoute.toString().indexOf('update') >= 0;
  }

  isActivatedRouteAdd(): boolean {
    return this._activatedRoute.toString().indexOf('add') >= 0;
  }

}
