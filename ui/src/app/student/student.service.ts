import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';

import {GenderService} from './lookup-values/gender/gender.service';
import {RaceService} from './lookup-values/race/race.service';
import {CountryService} from './lookup-values/country/country.service';
import {StateService} from './lookup-values/state/state.service';
import {CityService} from './lookup-values/city/city.service';
import {SchoolingService} from './lookup-values/schooling/schooling.service';
import {EducationCenterService} from '../shared/education-center/education-center.service';
import {GroupService} from './lookup-values/group/group.service';
import {EnrollmentStatusService} from './lookup-values/enrollment-status/enrollment-status.service';

import {Enrollment} from './enrollment.interface';
import {Student} from './student.model';
import {StudentDatabase} from './student-database.interface';

@Injectable()
export class StudentService {
  private studentHostName = 'localhost';
  private studentPortNum = 3000;
  private studentHost: string = this.studentHostName + ':' + this.studentPortNum;
  private url: string = 'http://' + this.studentHost;

  constructor(private _http: Http,
              private _genderService: GenderService,
              private _raceService: RaceService,
              private _countryService: CountryService,
              private _stateService: StateService,
              private _cityService: CityService,
              private _schoolingService: SchoolingService,
              private _educationCenterService: EducationCenterService,
              private _groupService: GroupService,
              private _enrollmentStatusService: EnrollmentStatusService) {
  }

  async findAll(): Promise<Student[]> {
    try {
      let students: Student[] = [];
      const response: Response = await this._http.get(this.url + '/students').toPromise();
      const studentsDatabase: StudentDatabase[] = response.json() as StudentDatabase[];
      studentsDatabase.map((databaseRow: StudentDatabase) => {
          students.push(this._convertStudentDatabaseToStudent(databaseRow));
        }
      );
      return Promise.resolve(students);
    } catch (err) {
      throw err;
    }
  }

  async findOne(studentId: number): Promise<Student> {
    try {
      const response: Response = await this._http.get(this.url + '/students/' + studentId.toString()).toPromise();
      const databaseRow: StudentDatabase = response.json() as StudentDatabase;
      const student = this._convertStudentDatabaseToStudent(databaseRow);
      return Promise.resolve(student);
    } catch (err) {
      throw err;
    }
  }

  private _convertStudentDatabaseToStudent(databaseRow: StudentDatabase): Student {
    let enrollments: Enrollment[] = [];
    if (databaseRow.educationCenterId01 !== null) {
      enrollments.push({
        educationCenter: this._educationCenterService.getElementById(databaseRow.educationCenterId01),
        group: this._groupService.getElementById(databaseRow.groupId01),
        studentEnrollmentDate: new Date(databaseRow.studentEnrollmentDate01),
        studentEnrollmentGuardianName: databaseRow.studentEnrollmentGuardianName01,
        studentEnrollmentSchoolCoordinatorName: databaseRow.studentEnrollmentSchoolCoordinatorName01,
        enrollmentStatus: this._enrollmentStatusService.getElementById(databaseRow.enrollmentStatusId01)
      });
    }
    if (databaseRow.educationCenterId02 !== null) {
      enrollments.push({
        educationCenter: this._educationCenterService.getElementById(databaseRow.educationCenterId02),
        group: this._groupService.getElementById(databaseRow.groupId02),
        studentEnrollmentDate: new Date(databaseRow.studentEnrollmentDate02),
        studentEnrollmentGuardianName: databaseRow.studentEnrollmentGuardianName02,
        studentEnrollmentSchoolCoordinatorName: databaseRow.studentEnrollmentSchoolCoordinatorName02,
        enrollmentStatus: this._enrollmentStatusService.getElementById(databaseRow.enrollmentStatusId02)
      });
    }
    if (databaseRow.educationCenterId03 !== null) {
      enrollments.push({
        educationCenter: this._educationCenterService.getElementById(databaseRow.educationCenterId03),
        group: this._groupService.getElementById(databaseRow.groupId03),
        studentEnrollmentDate: new Date(databaseRow.studentEnrollmentDate03),
        studentEnrollmentGuardianName: databaseRow.studentEnrollmentGuardianName03,
        studentEnrollmentSchoolCoordinatorName: databaseRow.studentEnrollmentSchoolCoordinatorName03,
        enrollmentStatus: this._enrollmentStatusService.getElementById(databaseRow.enrollmentStatusId03)
      });
    }
    if (databaseRow.educationCenterId04 !== null) {
      enrollments.push({
        educationCenter: this._educationCenterService.getElementById(databaseRow.educationCenterId04),
        group: this._groupService.getElementById(databaseRow.groupId04),
        studentEnrollmentDate: new Date(databaseRow.studentEnrollmentDate04),
        studentEnrollmentGuardianName: databaseRow.studentEnrollmentGuardianName04,
        studentEnrollmentSchoolCoordinatorName: databaseRow.studentEnrollmentSchoolCoordinatorName04,
        enrollmentStatus: this._enrollmentStatusService.getElementById(databaseRow.enrollmentStatusId04)
      });
    }
    if (databaseRow.educationCenterId05 !== null) {
      enrollments.push({
        educationCenter: this._educationCenterService.getElementById(databaseRow.educationCenterId05),
        group: this._groupService.getElementById(databaseRow.groupId05),
        studentEnrollmentDate: new Date(databaseRow.studentEnrollmentDate05),
        studentEnrollmentGuardianName: databaseRow.studentEnrollmentGuardianName05,
        studentEnrollmentSchoolCoordinatorName: databaseRow.studentEnrollmentSchoolCoordinatorName05,
        enrollmentStatus: this._enrollmentStatusService.getElementById(databaseRow.enrollmentStatusId05)
      });
    }
    if (databaseRow.educationCenterId06 !== null) {
      enrollments.push({
        educationCenter: this._educationCenterService.getElementById(databaseRow.educationCenterId06),
        group: this._groupService.getElementById(databaseRow.groupId06),
        studentEnrollmentDate: new Date(databaseRow.studentEnrollmentDate06),
        studentEnrollmentGuardianName: databaseRow.studentEnrollmentGuardianName06,
        studentEnrollmentSchoolCoordinatorName: databaseRow.studentEnrollmentSchoolCoordinatorName06,
        enrollmentStatus: this._enrollmentStatusService.getElementById(databaseRow.enrollmentStatusId06)
      });
    }

    return new Student(
      databaseRow.studentId,
      databaseRow.studentFirstName,
      databaseRow.studentMiddleName,
      databaseRow.studentLastName,
      this._genderService.getElementById(databaseRow.genderId),
      new Date(databaseRow.studentDateBirth),
      this._raceService.getElementById(databaseRow.raceId),
      this._countryService.getElementById(databaseRow.studentBirthPlaceLocalityCountryId),
      this._stateService.getElementById(databaseRow.studentBirthPlaceLocalityStateId),
      this._cityService.getElementById(databaseRow.studentBirthPlaceLocalityCityId),
      databaseRow.studentBirthCertificateId,
      databaseRow.studentAddressZipCode,
      databaseRow.studentAddressStreet,
      databaseRow.studentAddressSubDivision,
      databaseRow.studentAddressCompletement,
      this._countryService.getElementById(databaseRow.studentAddressLocalityCountryId),
      this._stateService.getElementById(databaseRow.studentAddressLocalityStateId),
      this._cityService.getElementById(databaseRow.studentAddressLocalityCityId),
      databaseRow.studentMotherName,
      databaseRow.studentMotherGovernmentId,
      this._schoolingService.getElementById(databaseRow.studentMotherSchoolingId),
      new Date(databaseRow.studentMotherDateBirth),
      databaseRow.studentMotherProfession,
      databaseRow.studentMotherPhoneNum,
      databaseRow.studentFatherName,
      databaseRow.studentFatherGovernmentId,
      this._schoolingService.getElementById(databaseRow.studentFatherSchoolingId),
      new Date(databaseRow.studentFatherDateBirth),
      databaseRow.studentFatherProfession,
      databaseRow.studentFatherPhoneNum,
      databaseRow.studentEmergencyPhoneNum01,
      databaseRow.studentEmergencyContactName01,
      databaseRow.studentEmergencyPhoneNum02,
      databaseRow.studentEmergencyContactName02,
      databaseRow.studentObservations,
      databaseRow.studentPhotoFileName,
      databaseRow.studentHadChickenpox === 1,
      databaseRow.studentHadRubella === 1,
      databaseRow.studentHadDehydration === 1,
      databaseRow.studentHadMumps === 1,
      databaseRow.studentHadOtherContagiousDiseaseDesc,
      databaseRow.studentHasAlergies,
      databaseRow.studentHasCardiacDiseases,
      databaseRow.studentHasNeurologicalDiseases,
      databaseRow.studentHasAuditiveDeficency === 1,
      databaseRow.studentHasVisualDeficency === 1,
      databaseRow.studentHasMentalDeficency === 1,
      databaseRow.studentHasMotorDeficency === 1,
      databaseRow.studentHasBrochitisOrAsthma === 1,
      databaseRow.studentHasRecurringDiarrhea === 1,
      databaseRow.studentHasConvulsions === 1,
      databaseRow.studentNeedConstantMedicalSupervision === 1,
      enrollments
    );
  }

  // async save(student: Student): Promise<boolean> {
  //   const successful = true;
  //   return successful;
  // }
  //
  // async remove(studentId: number): Promise<boolean> {
  //   const successful = true;
  //   return successful;
  // }

}
