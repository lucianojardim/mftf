import {Enrollment} from './enrollment.interface';
import {Gender} from './lookup-values/gender/gender.model';
import {Race} from './lookup-values/race/race.model';
import {Country} from './lookup-values/country/country.model';
import {State} from './lookup-values/state/state.model';
import {City} from './lookup-values/city/city.model';
import {Schooling} from './lookup-values/schooling/schooling.model';

export class Student {
  id: number;
  firstName: string;
  middleName: string;
  lastName: string;
  gender: Gender;
  dateBirth: Date;
  race: Race;
  birthPlaceCountry: Country;
  birthPlaceState: State;
  birthPlaceCity: City;
  birthCertificateId: string;
  addressZipCode: number;
  addressStreet: string;
  addressSubDivision: string;
  addressCompletement: string;
  addressLocalityCountry: Country;
  addressLocalityState: State;
  addressLocalityCity: City;
  motherName: string;
  motherGovernmentId: string;
  motherSchooling: Schooling;
  motherDateBirth: Date;
  motherProfession: string;
  motherPhoneNum: string;
  fatherName: string;
  fatherGovernmentId: string;
  fatherSchooling: Schooling;
  fatherDateBirth: Date;
  fatherProfession: string;
  fatherPhoneNum: string;
  emergencyPhoneNum01: string;
  emergencyContactName01: string;
  emergencyPhoneNum02: string;
  emergencyContactName02: string;
  observations: string;
  photoFileName: string;
  hadChickenpox: boolean;
  hadRubella: boolean;
  hadDehydration: boolean;
  hadMumps: boolean;
  hadOtherContagiousDiseaseDesc: string;
  hasAlergies: string;
  hasCardiacDiseases: string;
  hasNeurologicalDiseases: string;
  hasAuditiveDeficency: boolean;
  hasVisualDeficency: boolean;
  hasMentalDeficency: boolean;
  hasMotorDeficency: boolean;
  hasBrochitisOrAsthma: boolean;
  hasRecurringDiarrhea: boolean;
  hasConvulsions: boolean;
  needConstantMedicalSupervision: boolean;
  enrollments: Enrollment[] = [];
  // properties
  enrollmentMostCurrent: Enrollment;

  constructor(id: number,
              firstName: string,
              middleName: string,
              lastName: string,
              gender: Gender,
              dateBirth: Date,
              race: Race,
              birthPlaceCountry: Country,
              birthPlaceState: State,
              birthPlaceCity: City,
              birthCertificateId: string,
              addressZipCode: number,
              addressStreet: string,
              addressSubDivision: string,
              addressCompletement: string,
              addressLocalityCountry: Country,
              addressLocalityState: State,
              addressLocalityCity: City,
              motherName: string,
              motherGovernmentId: string,
              motherSchooling: Schooling,
              motherDateBirth: Date,
              motherProfession: string,
              motherPhoneNum: string,
              fatherName: string,
              fatherGovernmentId: string,
              fatherSchooling: Schooling,
              fatherDateBirth: Date,
              fatherProfession: string,
              fatherPhoneNum: string,
              emergencyPhoneNum01: string,
              emergencyContactName01: string,
              emergencyPhoneNum02: string,
              emergencyContactName02: string,
              observations: string,
              photoFileName: string,
              hadChickenpox: boolean,
              hadRubella: boolean,
              hadDehydration: boolean,
              hadMumps: boolean,
              hadOtherContagiousDiseaseDesc: string,
              hasAlergies: string,
              hasCardiacDiseases: string,
              hasNeurologicalDiseases: string,
              hasAuditiveDeficency: boolean,
              hasVisualDeficency: boolean,
              hasMentalDeficency: boolean,
              hasMotorDeficency: boolean,
              hasBrochitisOrAsthma: boolean,
              hasRecurringDiarrhea: boolean,
              hasConvulsions: boolean,
              needConstantMedicalSupervision: boolean,
              enrollments: Enrollment[]) {
    this.id = id;
    this.firstName = firstName;
    this.middleName = middleName;
    this.lastName = lastName;
    this.gender = gender;
    this.dateBirth = dateBirth;
    this.race = race;
    this.birthPlaceCountry = birthPlaceCountry;
    this.birthPlaceState = birthPlaceState;
    this.birthPlaceCity = birthPlaceCity;
    this.birthCertificateId = birthCertificateId;
    this.addressZipCode = addressZipCode;
    this.addressStreet = addressStreet;
    this.addressSubDivision = addressSubDivision;
    this.addressCompletement = addressCompletement;
    this.addressLocalityCountry = addressLocalityCountry;
    this.addressLocalityState = addressLocalityState;
    this.addressLocalityCity = addressLocalityCity;
    this.motherName = motherName;
    this.motherGovernmentId = motherGovernmentId;
    this.motherSchooling = motherSchooling;
    this.motherDateBirth = motherDateBirth;
    this.motherProfession = motherProfession;
    this.motherPhoneNum = motherPhoneNum;
    this.fatherName = fatherName;
    this.fatherGovernmentId = fatherGovernmentId;
    this.fatherSchooling = fatherSchooling;
    this.fatherDateBirth = fatherDateBirth;
    this.fatherProfession = fatherProfession;
    this.fatherPhoneNum = fatherPhoneNum;
    this.emergencyPhoneNum01 = emergencyPhoneNum01;
    this.emergencyContactName01 = emergencyContactName01;
    this.emergencyPhoneNum02 = emergencyPhoneNum02;
    this.emergencyContactName02 = emergencyContactName02;
    this.observations = observations;
    this.photoFileName = photoFileName;
    this.hadChickenpox = hadChickenpox;
    this.hadRubella = hadRubella;
    this.hadDehydration = hadDehydration;
    this.hadMumps = hadMumps;
    this.hadOtherContagiousDiseaseDesc = hadOtherContagiousDiseaseDesc;
    this.hasAlergies = hasAlergies;
    this.hasCardiacDiseases = hasCardiacDiseases;
    this.hasNeurologicalDiseases = hasNeurologicalDiseases;
    this.hasAuditiveDeficency = hasAuditiveDeficency;
    this.hasVisualDeficency = hasVisualDeficency;
    this.hasMentalDeficency = hasMentalDeficency;
    this.hasMotorDeficency = hasMotorDeficency;
    this.hasBrochitisOrAsthma = hasBrochitisOrAsthma;
    this.hasRecurringDiarrhea = hasRecurringDiarrhea;
    this.hasConvulsions = hasConvulsions;
    this.needConstantMedicalSupervision = needConstantMedicalSupervision;
    this.enrollments = enrollments;

    // properties
    this.enrollmentMostCurrent = Student._getEnrollmentCurrent(this.enrollments);
  }

  private static _getEnrollmentCurrent(enrollments: Enrollment[]): Enrollment {
    let elementHighestIndex: number = enrollments.length - 1;
    return enrollments[elementHighestIndex];
  }
}
