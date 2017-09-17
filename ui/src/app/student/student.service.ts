import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { environment } from '../../environments/environment';

import { AuthService } from '../shared/auth/auth.service';

import { GenderService } from './lookup-values/gender/gender.service';
import { RaceService } from './lookup-values/race/race.service';
import { CountryService } from './lookup-values/country/country.service';
import { StateService } from './lookup-values/state/state.service';
import { CityService } from './lookup-values/city/city.service';
import { SchoolingService } from './lookup-values/schooling/schooling.service';
import { EducationCenterService } from '../shared/education-center/education-center.service';
import { GroupService } from './lookup-values/group/group.service';
import { EnrollmentStatusService } from './lookup-values/enrollment-status/enrollment-status.service';

import { Enrollment } from './enrollment.interface';
import { Student } from './student.model';
import { StudentDatabase } from './student-database.interface';

@Injectable()
export class StudentService {
  private _studentApiUrl: string = environment.studentApiUrl;

  private static _convertStudentToStudentDatabase(student: Student): StudentDatabase {
    return {
      studentId: student.id ? student.id : 0,
      studentFirstName: student.firstName,
      studentMiddleName: student.middleName,
      studentLastName: student.lastName,
      genderId: student.gender.id,
      studentDateBirth: student.dateBirth.toString(),
      raceId: student.race.id,
      studentBirthPlaceLocalityCountryId: student.birthPlaceCountry ? student.birthPlaceCountry.id : 1,
      studentBirthPlaceLocalityStateId: student.birthPlaceState.id,
      studentBirthPlaceLocalityCityId: student.birthPlaceCity.id,
      studentBirthCertificateId: student.birthCertificateId,
      studentAddressZipCode: student.addressZipCode,
      studentAddressStreet: student.addressStreet,
      studentAddressSubDivision: student.addressSubDivision,
      studentAddressCompletement: student.addressCompletement,
      studentAddressLocalityCountryId: student.addressLocalityCountry ? student.addressLocalityCountry.id : 1,
      studentAddressLocalityStateId: student.addressLocalityState.id,
      studentAddressLocalityCityId: student.addressLocalityCity.id,
      studentMotherName: student.motherName,
      studentMotherGovernmentId: student.motherGovernmentId,
      studentMotherSchoolingId: student.motherSchooling ? student.motherSchooling.id : null,
      studentMotherDateBirth: student.motherDateBirth ? student.motherDateBirth.toString() : null,
      studentMotherProfession: student.motherProfession,
      studentMotherPhoneNum: student.motherPhoneNum,
      studentFatherName: student.fatherName,
      studentFatherGovernmentId: student.fatherGovernmentId,
      studentFatherSchoolingId: student.fatherSchooling ? student.fatherSchooling.id : null,
      studentFatherDateBirth: student.fatherDateBirth ? student.fatherDateBirth.toString() : null,
      studentFatherProfession: student.fatherProfession,
      studentFatherPhoneNum: student.fatherPhoneNum,
      studentEmergencyPhoneNum01: student.emergencyPhoneNum01,
      studentEmergencyContactName01: student.emergencyContactName01,
      studentEmergencyPhoneNum02: student.emergencyPhoneNum02,
      studentEmergencyContactName02: student.emergencyContactName02,
      studentObservations: student.observations,
      studentPhotoFileName: student.photoFileName,
      studentHadChickenpox: student.hadChickenpox ? 1 : 0,
      studentHadRubella: student.hadRubella ? 1 : 0,
      studentHadDehydration: student.hadDehydration ? 1 : 0,
      studentHadMumps: student.hadMumps ? 1 : 0,
      studentHadOtherContagiousDiseaseDesc: student.hadOtherContagiousDiseaseDesc,
      studentHasAlergies: student.hasAlergies,
      studentHasCardiacDiseases: student.hasCardiacDiseases,
      studentHasNeurologicalDiseases: student.hasNeurologicalDiseases,
      studentHasAuditiveDeficency: student.hasAuditiveDeficency ? 1 : 0,
      studentHasVisualDeficency: student.hasVisualDeficency ? 1 : 0,
      studentHasMentalDeficency: student.hasMentalDeficency ? 1 : 0,
      studentHasMotorDeficency: student.hasMotorDeficency ? 1 : 0,
      studentHasBrochitisOrAsthma: student.hasBrochitisOrAsthma ? 1 : 0,
      studentHasRecurringDiarrhea: student.hasRecurringDiarrhea ? 1 : 0,
      studentHasConvulsions: student.hasConvulsions ? 1 : 0,
      studentNeedConstantMedicalSupervision: student.needConstantMedicalSupervision ? 1 : 0,
      //
      educationCenterId01: student.enrollments[0].educationCenter ? student.enrollments[0].educationCenter.id : null,
      groupId01: student.enrollments[0].group ? student.enrollments[0].group.id : null,
      studentEnrollmentDate01: student.enrollments[0].studentEnrollmentDate ? student.enrollments[0].studentEnrollmentDate.toString() : null,
      studentEnrollmentGuardianName01: student.enrollments[0].studentEnrollmentGuardianName ? student.enrollments[0].studentEnrollmentGuardianName : null,
      studentEnrollmentSchoolCoordinatorName01: student.enrollments[0].studentEnrollmentSchoolCoordinatorName ? student.enrollments[0].studentEnrollmentSchoolCoordinatorName : null,
      enrollmentStatusId01: student.enrollments[0].enrollmentStatus ? student.enrollments[0].enrollmentStatus.id : null,
      //
      educationCenterId02: student.enrollments[1] ? student.enrollments[1].educationCenter.id : null,
      groupId02: student.enrollments[1] ? student.enrollments[1].group.id : null,
      studentEnrollmentDate02: student.enrollments[1] ? student.enrollments[1].studentEnrollmentDate.toString() : null,
      studentEnrollmentGuardianName02: student.enrollments[1] ? student.enrollments[1].studentEnrollmentGuardianName : null,
      studentEnrollmentSchoolCoordinatorName02: student.enrollments[1] ? student.enrollments[1].studentEnrollmentSchoolCoordinatorName : null,
      enrollmentStatusId02: student.enrollments[1] ? student.enrollments[1].enrollmentStatus.id : null,
      //
      educationCenterId03: student.enrollments[2] ? student.enrollments[2].educationCenter.id : null,
      groupId03: student.enrollments[2] ? student.enrollments[2].group.id : null,
      studentEnrollmentDate03: student.enrollments[2] ? student.enrollments[2].studentEnrollmentDate.toString() : null,
      studentEnrollmentGuardianName03: student.enrollments[2] ? student.enrollments[2].studentEnrollmentGuardianName : null,
      studentEnrollmentSchoolCoordinatorName03: student.enrollments[2] ? student.enrollments[2].studentEnrollmentSchoolCoordinatorName : null,
      enrollmentStatusId03: student.enrollments[2] ? student.enrollments[2].enrollmentStatus.id : null,
      //
      educationCenterId04: student.enrollments[3] ? student.enrollments[3].educationCenter.id : null,
      groupId04: student.enrollments[3] ? student.enrollments[3].group.id : null,
      studentEnrollmentDate04: student.enrollments[3] ? student.enrollments[3].studentEnrollmentDate.toString() : null,
      studentEnrollmentGuardianName04: student.enrollments[3] ? student.enrollments[3].studentEnrollmentGuardianName : null,
      studentEnrollmentSchoolCoordinatorName04: student.enrollments[3] ? student.enrollments[3].studentEnrollmentSchoolCoordinatorName : null,
      enrollmentStatusId04: student.enrollments[3] ? student.enrollments[3].enrollmentStatus.id : null,
      //
      educationCenterId05: student.enrollments[4] ? student.enrollments[4].educationCenter.id : null,
      groupId05: student.enrollments[4] ? student.enrollments[4].group.id : null,
      studentEnrollmentDate05: student.enrollments[4] ? student.enrollments[4].studentEnrollmentDate.toString() : null,
      studentEnrollmentGuardianName05: student.enrollments[4] ? student.enrollments[4].studentEnrollmentGuardianName : null,
      studentEnrollmentSchoolCoordinatorName05: student.enrollments[4] ? student.enrollments[4].studentEnrollmentSchoolCoordinatorName : null,
      enrollmentStatusId05: student.enrollments[4] ? student.enrollments[4].enrollmentStatus.id : null,
      //
      educationCenterId06: student.enrollments[5] ? student.enrollments[5].educationCenter.id : null,
      groupId06: student.enrollments[5] ? student.enrollments[5].group.id : null,
      studentEnrollmentDate06: student.enrollments[5] ? student.enrollments[5].studentEnrollmentDate.toString() : null,
      studentEnrollmentGuardianName06: student.enrollments[5] ? student.enrollments[5].studentEnrollmentGuardianName : null,
      studentEnrollmentSchoolCoordinatorName06: student.enrollments[5] ? student.enrollments[5].studentEnrollmentSchoolCoordinatorName : null,
      enrollmentStatusId06: student.enrollments[5] ? student.enrollments[5].enrollmentStatus.id : null,
    };
  }

  constructor(private _http: Http,
    private _genderService: GenderService,
    private _raceService: RaceService,
    private _countryService: CountryService,
    private _stateService: StateService,
    private _cityService: CityService,
    private _schoolingService: SchoolingService,
    private _educationCenterService: EducationCenterService,
    private _groupService: GroupService,
    private _enrollmentStatusService: EnrollmentStatusService,
    private _authService: AuthService) {
  }

  async findAll(): Promise<Student[]> {
    try {
      const response: Response = await this._http.get(this._studentApiUrl + '/students').toPromise();
      const studentsDatabase: StudentDatabase[] = response.json() as StudentDatabase[];
      const students = studentsDatabase.map((databaseRow: StudentDatabase) => {
        return (this._convertStudentDatabaseToStudent(databaseRow));
      }
      );

      // filter students returned based on education centers the user is allowed to display
      const userEducationCenters = await this._authService.getAuthorizedEducationUnits();
      const studentsBelongEducationCenters = students.filter(
        (student: Student) => userEducationCenters.find(
          userEducationCenter => student.enrollmentMostCurrent.educationCenter.name.toLowerCase() === userEducationCenter.toLowerCase()
        )
      );
      return Promise.resolve(studentsBelongEducationCenters);
    } catch (err) {
      throw err;
    }
  }

  async findOne(studentId: number): Promise<Student> {
    try {
      const response: Response = await this._http.get(this._studentApiUrl + '/students/' + studentId.toString()).toPromise();
      const databaseRow: StudentDatabase = response.json() as StudentDatabase;
      const student = this._convertStudentDatabaseToStudent(databaseRow);
      return Promise.resolve(student);
    } catch (err) {
      throw err;
    }
  }

  async save(student: Student): Promise<boolean> {
    let successful = false;
    try {
      const databaseRow: StudentDatabase = StudentService._convertStudentToStudentDatabase(student);
      const response: Response = await this._http.post(this._studentApiUrl + '/students', databaseRow).toPromise();
      successful = response.json() as boolean;
      return Promise.resolve(successful);
    } catch (err) {
      throw err;
    }
  }

  async remove(studentId: number): Promise<boolean> {
    try {
      const response: Response = await this._http.delete(this._studentApiUrl + '/students/' + studentId.toString()).toPromise();
      const successful = response.json() as boolean;
      return Promise.resolve(successful);
    } catch (err) {
      throw err;
    }
  }

  resetStudent(): Student {
    const enrollments: Enrollment[] = [{
      educationCenter: this._educationCenterService.getElementById(1),
      group: this._groupService.getElementById(1),
      studentEnrollmentDate: new Date(Date.now()),
      studentEnrollmentGuardianName: '',
      studentEnrollmentSchoolCoordinatorName: '',
      enrollmentStatus: this._enrollmentStatusService.getElementById(1)
    }];

    return new Student(
      0,
      '',
      '',
      '',
      this._genderService.getElementById(1),
      null, // new Date('01/01/1901'),
      this._raceService.getElementById(1),
      this._countryService.getElementById(1),
      this._stateService.getElementById(9),
      null, // this._cityService.getElementById(1),
      '',
      null, // 74000000,
      '',
      '',
      '',
      this._countryService.getElementById(1),
      this._stateService.getElementById(9),
      null, // this._cityService.getElementById(1),
      '',
      '',
      null, // this._schoolingService.getElementById(1),
      null, // new Date('01/01/1901'),
      '',
      '',
      '',
      '',
      null, // this._schoolingService.getElementById(1),
      null, // new Date('01/01/1901'),
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      false,
      false,
      false,
      false,
      '',
      '',
      '',
      '',
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      enrollments
    );
  }

  private _convertStudentDatabaseToStudent(databaseRow: StudentDatabase): Student {
    const enrollments: Enrollment[] = [];
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

}
