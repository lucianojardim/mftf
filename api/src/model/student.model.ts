export class Student {

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

    constructor(
    studentId: number,
 	studentFirstName: string,
 	studentMiddleName: string,
 	studentLastName: string,
	genderId: number,
 	studentDateBirth: string,
	raceId: number,
 	studentBirthPlaceLocalityCountryId: number,
 	studentBirthPlaceLocalityStateId: number,
 	studentBirthPlaceLocalityCityId: number,
 	studentBirthCertificateId: string,
 	studentAddressZipCode: number,
 	studentAddressStreet: string,
 	studentAddressSubDivision: string,
 	studentAddressCompletement: string,
 	studentAddressLocalityCountryId: number,
 	studentAddressLocalityStateId: number,
 	studentAddressLocalityCityId: number,
 	studentMotherName: string,
 	studentMotherGovernmentId: string,
 	studentMotherSchoolingId: number,
 	studentMotherDateBirth: string,
 	studentMotherProfession: string,
 	studentMotherPhoneNum: string,
 	studentFatherName: string,
 	studentFatherGovernmentId: string,
 	studentFatherSchoolingId: number,
 	studentFatherDateBirth: string,
 	studentFatherProfession: string,
 	studentFatherPhoneNum: string,
 	studentEmergencyPhoneNum01: string,
 	studentEmergencyContactName01: string,
 	studentEmergencyPhoneNum02: string,
 	studentEmergencyContactName02: string,
 	studentObservations: string,
 	studentPhotoFileName: string,
 	studentHadChickenpox: number,
 	studentHadRubella: number,
 	studentHadDehydration: number,
 	studentHadMumps: number,
 	studentHadOtherContagiousDiseaseDesc: string,
 	studentHasAlergies: string,
 	studentHasCardiacDiseases: string,
 	studentHasNeurologicalDiseases: string,
 	studentHasAuditiveDeficency: number,
 	studentHasVisualDeficency: number,
 	studentHasMentalDeficency: number,
 	studentHasMotorDeficency: number,
 	studentHasBrochitisOrAsthma: number,
 	studentHasRecurringDiarrhea: number,
 	studentHasConvulsions: number,
 	studentNeedConstantMedicalSupervision: number,
	//
	educationCenterId01: number,
	groupId01: number,
 	studentEnrollmentDate01: string,
 	studentEnrollmentGuardianName01: string,
 	studentEnrollmentSchoolCoordinatorName01: string,
	enrollmentStatusId01: number,
	//
 	educationCenterId02: number,
 	groupId02: number,
 	studentEnrollmentDate02: string,
 	studentEnrollmentGuardianName02: string,
 	studentEnrollmentSchoolCoordinatorName02: string,
 	enrollmentStatusId02: number,
	//
 	educationCenterId03: number,
 	groupId03: number,
 	studentEnrollmentDate03: string,
 	studentEnrollmentGuardianName03: string,
 	studentEnrollmentSchoolCoordinatorName03: string,
 	enrollmentStatusId03: number,
	//
 	educationCenterId04: number,
 	groupId04: number,
 	studentEnrollmentDate04: string,
 	studentEnrollmentGuardianName04: string,
 	studentEnrollmentSchoolCoordinatorName04: string,
 	enrollmentStatusId04: number,
	//
 	educationCenterId05: number,
 	groupId05: number,
 	studentEnrollmentDate05: string,
 	studentEnrollmentGuardianName05: string,
 	studentEnrollmentSchoolCoordinatorName05: string,
 	enrollmentStatusId05: number,
	//
 	educationCenterId06: number,
 	groupId06: number,
 	studentEnrollmentDate06: string,
 	studentEnrollmentGuardianName06: string,
 	studentEnrollmentSchoolCoordinatorName06: string,
 	enrollmentStatusId06: number
        ) {
    this.studentId = studentId;
 	this.studentFirstName = studentFirstName;
 	this.studentMiddleName = studentMiddleName;
 	this.studentLastName = studentLastName;
	this.genderId = genderId;
 	this.studentDateBirth = studentDateBirth;
	this.raceId = raceId;
 	this.studentBirthPlaceLocalityCountryId = studentBirthPlaceLocalityCountryId;
 	this.studentBirthPlaceLocalityStateId = studentBirthPlaceLocalityStateId;
 	this.studentBirthPlaceLocalityCityId = studentBirthPlaceLocalityCityId;
 	this.studentBirthCertificateId = studentBirthCertificateId;
 	this.studentAddressZipCode = studentAddressZipCode;
 	this.studentAddressStreet = studentAddressStreet;
 	this.studentAddressSubDivision = studentAddressSubDivision;
 	this.studentAddressCompletement = studentAddressCompletement;
 	this.studentAddressLocalityCountryId = studentAddressLocalityCountryId;
 	this.studentAddressLocalityStateId = studentAddressLocalityStateId;
 	this.studentAddressLocalityCityId = studentAddressLocalityCityId;
 	this.studentMotherName = studentMotherName;
 	this.studentMotherGovernmentId = studentMotherGovernmentId;
 	this.studentMotherSchoolingId = studentMotherSchoolingId;
 	this.studentMotherDateBirth = studentMotherDateBirth;
 	this.studentMotherProfession = studentMotherProfession;
 	this.studentMotherPhoneNum = studentMotherPhoneNum;
 	this.studentFatherName = studentFatherName;
 	this.studentFatherGovernmentId = studentFatherGovernmentId;
 	this.studentFatherSchoolingId =studentFatherSchoolingId;
 	this.studentFatherDateBirth = studentFatherDateBirth;
 	this.studentFatherProfession = studentFatherProfession;
 	this.studentFatherPhoneNum = studentFatherPhoneNum;
 	this.studentEmergencyPhoneNum01 = studentEmergencyPhoneNum01;
 	this.studentEmergencyContactName01 = studentEmergencyContactName01;
 	this.studentEmergencyPhoneNum02 = studentEmergencyPhoneNum02;
 	this.studentEmergencyContactName02 = studentEmergencyContactName02;
 	this.studentObservations = studentObservations;
 	this.studentPhotoFileName = studentPhotoFileName;
 	this.studentHadChickenpox = studentHadChickenpox;
 	this.studentHadRubella = studentHadRubella;
 	this.studentHadDehydration = studentHadDehydration;
 	this.studentHadMumps = studentHadMumps;
 	this.studentHadOtherContagiousDiseaseDesc = studentHadOtherContagiousDiseaseDesc;
 	this.studentHasAlergies = studentHasAlergies;
 	this.studentHasCardiacDiseases = studentHasCardiacDiseases;
 	this.studentHasNeurologicalDiseases = studentHasNeurologicalDiseases;
 	this.studentHasAuditiveDeficency = studentHasAuditiveDeficency;
 	this.studentHasVisualDeficency = studentHasVisualDeficency;
 	this.studentHasMentalDeficency = studentHasMentalDeficency;
 	this.studentHasMotorDeficency = studentHasMotorDeficency;
 	this.studentHasBrochitisOrAsthma = studentHasBrochitisOrAsthma;
 	this.studentHasRecurringDiarrhea = studentHasRecurringDiarrhea;
 	this.studentHasConvulsions = studentHasConvulsions;
 	this.studentNeedConstantMedicalSupervision = studentNeedConstantMedicalSupervision;
	//
	this.educationCenterId01 = educationCenterId01;
	this.groupId01 = groupId01;
 	this.studentEnrollmentDate01 = studentEnrollmentDate01;
 	this.studentEnrollmentGuardianName01 = studentEnrollmentGuardianName01;
 	this.studentEnrollmentSchoolCoordinatorName01 = studentEnrollmentSchoolCoordinatorName01;
	this.enrollmentStatusId01 = enrollmentStatusId01;
	//
	this.educationCenterId02 = educationCenterId02;
	this.groupId02 = groupId02;
 	this.studentEnrollmentDate02 = studentEnrollmentDate02;
 	this.studentEnrollmentGuardianName02 = studentEnrollmentGuardianName02;
 	this.studentEnrollmentSchoolCoordinatorName02 = studentEnrollmentSchoolCoordinatorName02;
	this.enrollmentStatusId02 = enrollmentStatusId02;
	//
	this.educationCenterId03 = educationCenterId03;
	this.groupId03 = groupId03;
 	this.studentEnrollmentDate03 = studentEnrollmentDate03;
 	this.studentEnrollmentGuardianName03 = studentEnrollmentGuardianName03;
 	this.studentEnrollmentSchoolCoordinatorName03 = studentEnrollmentSchoolCoordinatorName03;
	this.enrollmentStatusId03 = enrollmentStatusId03;
	//
	this.educationCenterId04 = educationCenterId04;
	this.groupId04 = groupId04;
 	this.studentEnrollmentDate04 = studentEnrollmentDate04;
 	this.studentEnrollmentGuardianName04 = studentEnrollmentGuardianName04;
 	this.studentEnrollmentSchoolCoordinatorName04 = studentEnrollmentSchoolCoordinatorName04;
	this.enrollmentStatusId04 = enrollmentStatusId04;
	//
	this.educationCenterId05 = educationCenterId05;
	this.groupId05 = groupId05;
 	this.studentEnrollmentDate05 = studentEnrollmentDate05;
 	this.studentEnrollmentGuardianName05 = studentEnrollmentGuardianName05;
 	this.studentEnrollmentSchoolCoordinatorName05 = studentEnrollmentSchoolCoordinatorName05;
	this.enrollmentStatusId05 = enrollmentStatusId05;
	//
	this.educationCenterId06 = educationCenterId06;
	this.groupId06 = groupId06;
 	this.studentEnrollmentDate06 = studentEnrollmentDate06;
 	this.studentEnrollmentGuardianName06 = studentEnrollmentGuardianName06;
 	this.studentEnrollmentSchoolCoordinatorName06 = studentEnrollmentSchoolCoordinatorName06;
	this.enrollmentStatusId06 = enrollmentStatusId06;
    }

}