export interface StudentDatabase {

  studentId: number;
  studentFirstName: string;
  studentMiddleName: string;
  studentLastName: string;
  genderId: number;
  studentDateBirth: string;
  raceId: number;
  studentBirthPlaceLocalityCountryId: number;
  studentBirthPlaceLocalityStateId: number;
  studentBirthPlaceLocalityCityId: number;
  studentBirthCertificateId: string;
  studentAddressZipCode: number;
  studentAddressStreet: string;
  studentAddressSubDivision: string;
  studentAddressCompletement: string;
  studentAddressLocalityCountryId: number;
  studentAddressLocalityStateId: number;
  studentAddressLocalityCityId: number;
  studentMotherName: string;
  studentMotherGovernmentId: string;
  studentMotherSchoolingId: number;
  studentMotherDateBirth: string;
  studentMotherProfession: string;
  studentMotherPhoneNum: string;
  studentFatherName: string;
  studentFatherGovernmentId: string;
  studentFatherSchoolingId: number;
  studentFatherDateBirth: string;
  studentFatherProfession: string;
  studentFatherPhoneNum: string;
  studentEmergencyPhoneNum01: string;
  studentEmergencyContactName01: string;
  studentEmergencyPhoneNum02: string;
  studentEmergencyContactName02: string;
  studentObservations: string;
  studentPhotoFileName: string;
  studentHadChickenpox: number;
  studentHadRubella: number;
  studentHadDehydration: number;
  studentHadMumps: number;
  studentHadOtherContagiousDiseaseDesc: string;
  studentHasAlergies: string;
  studentHasCardiacDiseases: string;
  studentHasNeurologicalDiseases: string;
  studentHasAuditiveDeficency: number;
  studentHasVisualDeficency: number;
  studentHasMentalDeficency: number;
  studentHasMotorDeficency: number;
  studentHasBrochitisOrAsthma: number;
  studentHasRecurringDiarrhea: number;
  studentHasConvulsions: number;
  studentNeedConstantMedicalSupervision: number;
  //
  educationCenterId01: number;
  groupId01: number;
  studentEnrollmentDate01: string;
  studentEnrollmentGuardianName01: string;
  studentEnrollmentSchoolCoordinatorName01: string;
  enrollmentStatusId01: number;
  //
  educationCenterId02: number;
  groupId02: number;
  studentEnrollmentDate02: string;
  studentEnrollmentGuardianName02: string;
  studentEnrollmentSchoolCoordinatorName02: string;
  enrollmentStatusId02: number;
  //
  educationCenterId03: number;
  groupId03: number;
  studentEnrollmentDate03: string;
  studentEnrollmentGuardianName03: string;
  studentEnrollmentSchoolCoordinatorName03: string;
  enrollmentStatusId03: number;
  //
  educationCenterId04: number;
  groupId04: number;
  studentEnrollmentDate04: string;
  studentEnrollmentGuardianName04: string;
  studentEnrollmentSchoolCoordinatorName04: string;
  enrollmentStatusId04: number;
  //
  educationCenterId05: number;
  groupId05: number;
  studentEnrollmentDate05: string;
  studentEnrollmentGuardianName05: string;
  studentEnrollmentSchoolCoordinatorName05: string;
  enrollmentStatusId05: number;
  //
  educationCenterId06: number;
  groupId06: number;
  studentEnrollmentDate06: string;
  studentEnrollmentGuardianName06: string;
  studentEnrollmentSchoolCoordinatorName06: string;
  enrollmentStatusId06: number;
}
