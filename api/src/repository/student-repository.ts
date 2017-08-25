import {Service} from "typedi";
import * as path from "path";
import * as sqlite3 from "sqlite3";    

import {Student} from "../model/student.model";

@Service()
export class StudentRepository {

    private db: sqlite3.Database;
    private dbname: string = "mftf.db";
    private listTableColumnsExceptPK: string =
            "`studentFirstName`,"+
            "`studentMiddleName`,"+
            "`studentLastName`,"+
            "`genderId`,"+
            "`studentDateBirth`,"+
            "`raceId`,"+
            "`studentBirthPlaceLocalityCountryId`,"+
            "`studentBirthPlaceLocalityStateId`,"+
            "`studentBirthPlaceLocalityCityId`,"+
            "`studentBirthCertificateId`,"+
            "`studentAddressZipCode`,"+
            "`studentAddressStreet`,"+
            "`studentAddressSubDivision`,"+
            "`studentAddressCompletement`,"+
            "`studentAddressLocalityCountryId`,"+
            "`studentAddressLocalityStateId`,"+
            "`studentAddressLocalityCityId`,"+
            "`studentMotherName`,"+
            "`studentMotherGovernmentId`,"+
            "`studentMotherSchoolingId`,"+
            "`studentMotherDateBirth`,"+
            "`studentMotherProfession`,"+
            "`studentMotherPhoneNum`,"+
            "`studentFatherName`,"+
            "`studentFatherGovernmentId`,"+
            "`studentFatherSchoolingId`,"+
            "`studentFatherDateBirth`,"+
            "`studentFatherProfession`,"+
            "`studentFatherPhoneNum`,"+
            "`studentEmergencyPhoneNum01`,"+
            "`studentEmergencyContactName01`,"+
            "`studentEmergencyPhoneNum02`,"+
            "`studentEmergencyContactName02`,"+
            "`studentObservations`,"+
            "`studentPhotoFileName`,"+
            "`studentHadChickenpox`,"+
            "`studentHadRubella`,"+
            "`studentHadDehydration`,"+
            "`studentHadMumps`,"+
            "`studentHadOtherContagiousDiseaseDesc`,"+
            "`studentHasAlergies`,"+
            "`studentHasCardiacDiseases`,"+
            "`studentHasNeurologicalDiseases`,"+
            "`studentHasAuditiveDeficency`,"+
            "`studentHasVisualDeficency`,"+
            "`studentHasMentalDeficency`,"+
            "`studentHasMotorDeficency`,"+
            "`studentHasBrochitisOrAsthma`,"+
            "`studentHasRecurringDiarrhea`,"+
            "`studentHasConvulsions`,"+
            "`studentNeedConstantMedicalSupervision`,"+
            "`educationCenterId01`,"+
            "`groupId01`,"+
            "`studentEnrollmentDate01`,"+
            "`studentEnrollmentGuardianName01`,"+
            "`studentEnrollmentSchoolCoordinatorName01`,"+
            "`enrollmentStatusId01`,"+
            "`educationCenterId02`,"+
            "`groupId02`,"+
            "`studentEnrollmentDate02`,"+
            "`studentEnrollmentGuardianName02`,"+
            "`studentEnrollmentSchoolCoordinatorName02`,"+
            "`enrollmentStatusId02`,"+
            "`educationCenterId03`,"+
            "`groupId03`,"+
            "`studentEnrollmentDate03`,"+
            "`studentEnrollmentGuardianName03`,"+
            "`studentEnrollmentSchoolCoordinatorName03`,"+
            "`enrollmentStatusId03`,"+
            "`educationCenterId04`,"+
            "`groupId04`,"+
            "`studentEnrollmentDate04`,"+
            "`studentEnrollmentGuardianName04`,"+
            "`studentEnrollmentSchoolCoordinatorName04`,"+
            "`enrollmentStatusId01`,"+
            "`educationCenterId05`,"+
            "`groupId05`,"+
            "`studentEnrollmentDate05`,"+
            "`studentEnrollmentGuardianName05`,"+
            "`studentEnrollmentSchoolCoordinatorName05`,"+
            "`enrollmentStatusId05`,"+
            "`educationCenterId06`,"+
            "`groupId06`,"+
            "`studentEnrollmentDate06`,"+
            "`studentEnrollmentGuardianName06`,"+
            "`studentEnrollmentSchoolCoordinatorName06`,"+
            "`enrollmentStatusId06` ";
    private select: string = "SELECT "+
        "`studentId`,"+
        this.listTableColumnsExceptPK+
        "FROM `student` ";
    private update: string = "UPDATE `student` SET "+
        "`studentFirstName` = $studentFirstName,"+
        "`studentMiddleName` = $studentMiddleName,"+
        "`studentLastName` = $studentLastName,"+
        "`genderId` = $genderId,"+
        "`studentDateBirth` = $studentDateBirth,"+
        "`raceId` = $raceId,"+
        "`studentBirthPlaceLocalityCountryId` = $studentBirthPlaceLocalityCountryId,"+
        "`studentBirthPlaceLocalityStateId` = $studentBirthPlaceLocalityStateId,"+
        "`studentBirthPlaceLocalityCityId` = $studentBirthPlaceLocalityCityId,"+
        "`studentBirthCertificateId` = $studentBirthCertificateId,"+
        "`studentAddressZipCode` = $studentAddressZipCode,"+
        "`studentAddressStreet` = $studentAddressStreet,"+
        "`studentAddressSubDivision` = $studentAddressSubDivision,"+
        "`studentAddressCompletement` = $studentAddressCompletement,"+
        "`studentAddressLocalityCountryId` = $studentAddressLocalityCountryId,"+
        "`studentAddressLocalityStateId` = $studentAddressLocalityStateId,"+
        "`studentAddressLocalityCityId` = $studentAddressLocalityCityId,"+
        "`studentMotherName` = $studentMotherName,"+
        "`studentMotherGovernmentId` = $studentMotherGovernmentId,"+
        "`studentMotherSchoolingId` = $studentMotherSchoolingId,"+
        "`studentMotherDateBirth` = $studentMotherDateBirth,"+
        "`studentMotherProfession` = $studentMotherProfession,"+
        "`studentMotherPhoneNum` = $studentMotherPhoneNum,"+
        "`studentFatherName` = $studentFatherName,"+
        "`studentFatherGovernmentId` = $studentFatherGovernmentId,"+
        "`studentFatherSchoolingId` = $studentFatherSchoolingId,"+
        "`studentFatherDateBirth` = $studentFatherDateBirth,"+
        "`studentFatherProfession` = $studentFatherProfession,"+
        "`studentFatherPhoneNum` = $studentFatherPhoneNum,"+
        "`studentEmergencyPhoneNum01` = $studentEmergencyPhoneNum01,"+
        "`studentEmergencyContactName01` = $studentEmergencyContactName01,"+
        "`studentEmergencyPhoneNum02` = $studentEmergencyPhoneNum02,"+
        "`studentEmergencyContactName02` = $studentEmergencyContactName02,"+
        "`studentObservations` = $studentObservations,"+
        "`studentPhotoFileName` = $studentPhotoFileName,"+
        "`studentHadChickenpox` = $studentHadChickenpox,"+
        "`studentHadRubella` = $studentHadRubella,"+
        "`studentHadDehydration` = $studentHadDehydration,"+
        "`studentHadMumps` = $studentHadMumps,"+
        "`studentHadOtherContagiousDiseaseDesc` = $studentHadOtherContagiousDiseaseDesc,"+
        "`studentHasAlergies` = $studentHasAlergies,"+
        "`studentHasCardiacDiseases` = $studentHasCardiacDiseases,"+
        "`studentHasNeurologicalDiseases` = $studentHasNeurologicalDiseases,"+
        "`studentHasAuditiveDeficency` = $studentHasAuditiveDeficency,"+
        "`studentHasVisualDeficency` = $studentHasVisualDeficency,"+
        "`studentHasMentalDeficency` = $studentHasMentalDeficency,"+
        "`studentHasMotorDeficency` = $studentHasMotorDeficency,"+
        "`studentHasBrochitisOrAsthma` = $studentHasBrochitisOrAsthma,"+
        "`studentHasRecurringDiarrhea` = $studentHasRecurringDiarrhea,"+
        "`studentHasConvulsions` = $studentHasConvulsions,"+
        "`studentNeedConstantMedicalSupervision` = $studentNeedConstantMedicalSupervision,"+
        "`educationCenterId01` = $educationCenterId01,"+
        "`groupId01` = $groupId01,"+
        "`studentEnrollmentDate01` = $studentEnrollmentDate01,"+
        "`studentEnrollmentGuardianName01` = $studentEnrollmentGuardianName01,"+
        "`studentEnrollmentSchoolCoordinatorName01` = $studentEnrollmentSchoolCoordinatorName01,"+
        "`enrollmentStatusId01` = $enrollmentStatusId01,"+
        "`educationCenterId02` = $educationCenterId02,"+
        "`groupId02` = $groupId02,"+
        "`studentEnrollmentDate02` = $studentEnrollmentDate02,"+
        "`studentEnrollmentGuardianName02` = $studentEnrollmentGuardianName02,"+
        "`studentEnrollmentSchoolCoordinatorName02` = $studentEnrollmentSchoolCoordinatorName02,"+
        "`enrollmentStatusId02` = $enrollmentStatusId02,"+
        "`educationCenterId03` = $educationCenterId03,"+
        "`groupId03` = $groupId03,"+
        "`studentEnrollmentDate03` = $studentEnrollmentDate03,"+
        "`studentEnrollmentGuardianName03` = $studentEnrollmentGuardianName03,"+
        "`studentEnrollmentSchoolCoordinatorName03` = $studentEnrollmentSchoolCoordinatorName03,"+
        "`enrollmentStatusId03` = $enrollmentStatusId03,"+
        "`educationCenterId04` = $educationCenterId04,"+
        "`groupId04` = $groupId04,"+
        "`studentEnrollmentDate04` = $studentEnrollmentDate04,"+
        "`studentEnrollmentGuardianName04` = $studentEnrollmentGuardianName04,"+
        "`studentEnrollmentSchoolCoordinatorName04` = $studentEnrollmentSchoolCoordinatorName04,"+
        "`enrollmentStatusId04` = $enrollmentStatusId04,"+
        "`educationCenterId05` = $educationCenterId05,"+
        "`groupId05` = $groupId05,"+
        "`studentEnrollmentDate05` = $studentEnrollmentDate05,"+
        "`studentEnrollmentGuardianName05` = $studentEnrollmentGuardianName05,"+
        "`studentEnrollmentSchoolCoordinatorName05` = $studentEnrollmentSchoolCoordinatorName05,"+
        "`enrollmentStatusId05` = $enrollmentStatusId05,"+
        "`educationCenterId06` = $educationCenterId06,"+
        "`groupId06` = $groupId06,"+
        "`studentEnrollmentDate06` = $studentEnrollmentDate06,"+
        "`studentEnrollmentGuardianName06` = $studentEnrollmentGuardianName06,"+
        "`studentEnrollmentSchoolCoordinatorName06` = $studentEnrollmentSchoolCoordinatorName06,"+
        "`enrollmentStatusId06` = $enrollmentStatusId06 ";
    private insert: string = "INSERT INTO `student` ("+ 
        this.listTableColumnsExceptPK+
        ") VALUES ("+
        "$studentFirstName,"+
        "$studentMiddleName,"+
        "$studentLastName,"+
        "$genderId,"+
        "$studentDateBirth,"+
        "$raceId,"+
        "$studentBirthPlaceLocalityCountryId,"+
        "$studentBirthPlaceLocalityStateId,"+
        "$studentBirthPlaceLocalityCityId,"+
        "$studentBirthCertificateId,"+
        "$studentAddressZipCode,"+
        "$studentAddressStreet,"+
        "$studentAddressSubDivision,"+
        "$studentAddressCompletement,"+
        "$studentAddressLocalityCountryId,"+
        "$studentAddressLocalityStateId,"+
        "$studentAddressLocalityCityId,"+
        "$studentMotherName,"+
        "$studentMotherGovernmentId,"+
        "$studentMotherSchoolingId,"+
        "$studentMotherDateBirth,"+
        "$studentMotherProfession,"+
        "$studentMotherPhoneNum,"+
        "$studentFatherName,"+
        "$studentFatherGovernmentId,"+
        "$studentFatherSchoolingId,"+
        "$studentFatherDateBirth,"+
        "$studentFatherProfession,"+
        "$studentFatherPhoneNum,"+
        "$studentEmergencyPhoneNum01,"+
        "$studentEmergencyContactName01,"+
        "$studentEmergencyPhoneNum02,"+
        "$studentEmergencyContactName02,"+
        "$studentObservations,"+
        "$studentPhotoFileName,"+
        "$studentHadChickenpox,"+
        "$studentHadRubella,"+
        "$studentHadDehydration,"+
        "$studentHadMumps,"+
        "$studentHadOtherContagiousDiseaseDesc,"+
        "$studentHasAlergies,"+
        "$studentHasCardiacDiseases,"+
        "$studentHasNeurologicalDiseases,"+
        "$studentHasAuditiveDeficency,"+
        "$studentHasVisualDeficency,"+
        "$studentHasMentalDeficency,"+
        "$studentHasMotorDeficency,"+
        "$studentHasBrochitisOrAsthma,"+
        "$studentHasRecurringDiarrhea,"+
        "$studentHasConvulsions,"+
        "$studentNeedConstantMedicalSupervision,"+
        "$educationCenterId01,"+
        "$groupId01,"+
        "$studentEnrollmentDate01,"+
        "$studentEnrollmentGuardianName01,"+
        "$studentEnrollmentSchoolCoordinatorName01,"+
        "$enrollmentStatusId01,"+
        "$educationCenterId02,"+
        "$groupId02,"+
        "$studentEnrollmentDate02,"+
        "$studentEnrollmentGuardianName02,"+
        "$studentEnrollmentSchoolCoordinatorName02,"+
        "$enrollmentStatusId02,"+
        "$educationCenterId03,"+
        "$groupId03,"+
        "$studentEnrollmentDate03,"+
        "$studentEnrollmentGuardianName03,"+
        "$studentEnrollmentSchoolCoordinatorName03,"+
        "$enrollmentStatusId03,"+
        "$educationCenterId04,"+
        "$groupId04,"+
        "$studentEnrollmentDate04,"+
        "$studentEnrollmentGuardianName04,"+
        "$studentEnrollmentSchoolCoordinatorName04,"+
        "$enrollmentStatusId04,"+
        "$educationCenterId05,"+
        "$groupId05,"+
        "$studentEnrollmentDate05,"+
        "$studentEnrollmentGuardianName05,"+
        "$studentEnrollmentSchoolCoordinatorName05,"+
        "$enrollmentStatusId05,"+
        "$educationCenterId06,"+
        "$groupId06,"+
        "$studentEnrollmentDate06,"+
        "$studentEnrollmentGuardianName06,"+
        "$studentEnrollmentSchoolCoordinatorName06,"+
        "$enrollmentStatusId06 "+
        ");"
    private delete: string = "DELETE FROM `student` WHERE `studentId` = $studentId";

    constructor() {
        sqlite3.verbose();
        const dbPath = path.resolve(__dirname, this.dbname);
        this.db = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE, (err: Error | null) => {
            if (err) {
                return console.error(err.message);
            }
        });
        this.db.on("trace", (sql: string) => console.log(sql+"\n"));
        this.db.on("error", (err: Error) => console.error(err+"\n"));
        this.db.on("open", () => console.log(`Database ${this.dbname} was opened`+"\n"));
        this.db.on("close", () => console.log(`Database ${this.dbname} was closed`+"\n"));
        this.run("PRAGMA foreign_keys = ON")
            .then()
            .catch(err => console.error(err));
    }

    findAll(): Promise<Student[]> {
        const sql = this.select + "ORDER BY `studentId`"
        const params: any = {};
        return new Promise<Student[]>( (resolve, reject) => {
            if (!this.db) {
                reject(new Error('Database connection not open'));
                return;
            }
            this.db.all(sql, params, function (this: sqlite3.Statement, err: Error | null, rows: Student[]) : void {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows);
                }
            });
        });
    }

    findOne(studentId: number): Promise<Student> {
        const sql = this.select + "WHERE `studentId` = $studentId"
        const params: any = {$studentId: studentId};
        return new Promise<Student>( (resolve, reject) => {
            if (!this.db) {
                reject(new Error('Database connection not open'));
                return;
            }
            this.db.get(sql, params, function (this: sqlite3.Statement, err: Error | null, row: Student) : void {
                if (err) {
                    reject(err);
                } else {
                    resolve(row);
                }
            });
        });
    }

    save(student: Student): Promise<sqlite3.RunResult> {
        //
        // TODO: Need to validate the data before insert or update ? or caller will validate?
        //

        let params: any;
        let sql: string;
        if (student.studentId) { // update
            params = {
                $studentId: student.studentId,
                $studentFirstName: student.studentFirstName,
                $studentMiddleName: student.studentMiddleName,
                $studentLastName: student.studentLastName,
                $genderId: student.genderId,
                $studentDateBirth: student.studentDateBirth,
                $raceId: student.raceId,
                $studentBirthPlaceLocalityCountryId: student.studentBirthPlaceLocalityCountryId,
                $studentBirthPlaceLocalityStateId: student.studentBirthPlaceLocalityStateId,
                $studentBirthPlaceLocalityCityId: student.studentBirthPlaceLocalityCityId,
                $studentBirthCertificateId: student.studentBirthCertificateId,
                $studentAddressZipCode: student.studentAddressZipCode,
                $studentAddressStreet: student.studentAddressStreet,
                $studentAddressSubDivision: student.studentAddressSubDivision,
                $studentAddressCompletement: student.studentAddressCompletement,
                $studentAddressLocalityCountryId: student.studentAddressLocalityCountryId,
                $studentAddressLocalityStateId: student.studentAddressLocalityStateId,
                $studentAddressLocalityCityId: student.studentAddressLocalityCityId,
                $studentMotherName: student.studentMotherName,
                $studentMotherGovernmentId: student.studentMotherGovernmentId,
                $studentMotherSchoolingId: student.studentMotherSchoolingId,
                $studentMotherDateBirth: student.studentMotherDateBirth,
                $studentMotherProfession: student.studentMotherProfession,
                $studentMotherPhoneNum: student.studentMotherPhoneNum,
                $studentFatherName: student.studentFatherName,
                $studentFatherGovernmentId: student.studentFatherGovernmentId,
                $studentFatherSchoolingId: student.studentFatherSchoolingId,
                $studentFatherDateBirth: student.studentFatherDateBirth,
                $studentFatherProfession: student.studentFatherProfession,
                $studentFatherPhoneNum: student.studentFatherPhoneNum,
                $studentEmergencyPhoneNum01: student.studentEmergencyPhoneNum01,
                $studentEmergencyContactName01: student.studentEmergencyContactName01,
                $studentEmergencyPhoneNum02: student.studentEmergencyPhoneNum02,
                $studentEmergencyContactName02: student.studentEmergencyContactName02,
                $studentObservations: student.studentObservations,
                $studentPhotoFileName: student.studentPhotoFileName,
                $studentHadChickenpox: student.studentHadChickenpox,
                $studentHadRubella: student.studentHadRubella,
                $studentHadDehydration: student.studentHadDehydration,
                $studentHadMumps: student.studentHadMumps,
                $studentHadOtherContagiousDiseaseDesc: student.studentHadOtherContagiousDiseaseDesc,
                $studentHasAlergies: student.studentHasAlergies,
                $studentHasCardiacDiseases: student.studentHasCardiacDiseases,
                $studentHasNeurologicalDiseases: student.studentHasNeurologicalDiseases,
                $studentHasAuditiveDeficency: student.studentHasAuditiveDeficency,
                $studentHasVisualDeficency: student.studentHasVisualDeficency,
                $studentHasMentalDeficency: student.studentHasMentalDeficency,
                $studentHasMotorDeficency: student.studentHasMotorDeficency,
                $studentHasBrochitisOrAsthma: student.studentHasBrochitisOrAsthma,
                $studentHasRecurringDiarrhea: student.studentHasRecurringDiarrhea,
                $studentHasConvulsions: student.studentHasConvulsions,
                $studentNeedConstantMedicalSupervision: student.studentNeedConstantMedicalSupervision,
                $educationCenterId01: student.educationCenterId01,
                $groupId01: student.groupId01,
                $studentEnrollmentDate01: student.studentEnrollmentDate01,
                $studentEnrollmentGuardianName01: student.studentEnrollmentGuardianName01,
                $studentEnrollmentSchoolCoordinatorName01: student.studentEnrollmentSchoolCoordinatorName01,
                $enrollmentStatusId01: student.enrollmentStatusId01,
                $educationCenterId02: student.educationCenterId02,
                $groupId02: student.groupId02,
                $studentEnrollmentDate02: student.studentEnrollmentDate02,
                $studentEnrollmentGuardianName02: student.studentEnrollmentGuardianName02,
                $studentEnrollmentSchoolCoordinatorName02: student.studentEnrollmentSchoolCoordinatorName02,
                $enrollmentStatusId02: student.enrollmentStatusId02,
                $educationCenterId03: student.educationCenterId03,
                $groupId03: student.groupId03,
                $studentEnrollmentDate03: student.studentEnrollmentDate03,
                $studentEnrollmentGuardianName03: student.studentEnrollmentGuardianName03,
                $studentEnrollmentSchoolCoordinatorName03: student.studentEnrollmentSchoolCoordinatorName03,
                $enrollmentStatusId03: student.enrollmentStatusId03,
                $educationCenterId04: student.educationCenterId04,
                $groupId04: student.groupId04,
                $studentEnrollmentDate04: student.studentEnrollmentDate04,
                $studentEnrollmentGuardianName04: student.studentEnrollmentGuardianName04,
                $studentEnrollmentSchoolCoordinatorName04: student.studentEnrollmentSchoolCoordinatorName04,
                $enrollmentStatusId04: student.enrollmentStatusId04,
                $educationCenterId05: student.educationCenterId05,
                $groupId05: student.groupId05,
                $studentEnrollmentDate05: student.studentEnrollmentDate05,
                $studentEnrollmentGuardianName05: student.studentEnrollmentGuardianName05,
                $studentEnrollmentSchoolCoordinatorName05: student.studentEnrollmentSchoolCoordinatorName05,
                $enrollmentStatusId05: student.enrollmentStatusId05,
                $educationCenterId06: student.educationCenterId06,
                $groupId06: student.groupId06,
                $studentEnrollmentDate06: student.studentEnrollmentDate06,
                $studentEnrollmentGuardianName06: student.studentEnrollmentGuardianName06,
                $studentEnrollmentSchoolCoordinatorName06: student.studentEnrollmentSchoolCoordinatorName06,
                $enrollmentStatusId06: student.enrollmentStatusId06
            };
            sql = this.update + "WHERE `studentId` = $studentId";
        } else { // insert
            params = {
                $studentFirstName: student.studentFirstName,
                $studentMiddleName: student.studentMiddleName,
                $studentLastName: student.studentLastName,
                $genderId: student.genderId,
                $studentDateBirth: student.studentDateBirth,
                $raceId: student.raceId,
                $studentBirthPlaceLocalityCountryId: student.studentBirthPlaceLocalityCountryId,
                $studentBirthPlaceLocalityStateId: student.studentBirthPlaceLocalityStateId,
                $studentBirthPlaceLocalityCityId: student.studentBirthPlaceLocalityCityId,
                $studentBirthCertificateId: student.studentBirthCertificateId,
                $studentAddressZipCode: student.studentAddressZipCode,
                $studentAddressStreet: student.studentAddressStreet,
                $studentAddressSubDivision: student.studentAddressSubDivision,
                $studentAddressCompletement: student.studentAddressCompletement,
                $studentAddressLocalityCountryId: student.studentAddressLocalityCountryId,
                $studentAddressLocalityStateId: student.studentAddressLocalityStateId,
                $studentAddressLocalityCityId: student.studentAddressLocalityCityId,
                $studentMotherName: student.studentMotherName,
                $studentMotherGovernmentId: student.studentMotherGovernmentId,
                $studentMotherSchoolingId: student.studentMotherSchoolingId,
                $studentMotherDateBirth: student.studentMotherDateBirth,
                $studentMotherProfession: student.studentMotherProfession,
                $studentMotherPhoneNum: student.studentMotherPhoneNum,
                $studentFatherName: student.studentFatherName,
                $studentFatherGovernmentId: student.studentFatherGovernmentId,
                $studentFatherSchoolingId: student.studentFatherSchoolingId,
                $studentFatherDateBirth: student.studentFatherDateBirth,
                $studentFatherProfession: student.studentFatherProfession,
                $studentFatherPhoneNum: student.studentFatherPhoneNum,
                $studentEmergencyPhoneNum01: student.studentEmergencyPhoneNum01,
                $studentEmergencyContactName01: student.studentEmergencyContactName01,
                $studentEmergencyPhoneNum02: student.studentEmergencyPhoneNum02,
                $studentEmergencyContactName02: student.studentEmergencyContactName02,
                $studentObservations: student.studentObservations,
                $studentPhotoFileName: student.studentPhotoFileName,
                $studentHadChickenpox: student.studentHadChickenpox,
                $studentHadRubella: student.studentHadRubella,
                $studentHadDehydration: student.studentHadDehydration,
                $studentHadMumps: student.studentHadMumps,
                $studentHadOtherContagiousDiseaseDesc: student.studentHadOtherContagiousDiseaseDesc,
                $studentHasAlergies: student.studentHasAlergies,
                $studentHasCardiacDiseases: student.studentHasCardiacDiseases,
                $studentHasNeurologicalDiseases: student.studentHasNeurologicalDiseases,
                $studentHasAuditiveDeficency: student.studentHasAuditiveDeficency,
                $studentHasVisualDeficency: student.studentHasVisualDeficency,
                $studentHasMentalDeficency: student.studentHasMentalDeficency,
                $studentHasMotorDeficency: student.studentHasMotorDeficency,
                $studentHasBrochitisOrAsthma: student.studentHasBrochitisOrAsthma,
                $studentHasRecurringDiarrhea: student.studentHasRecurringDiarrhea,
                $studentHasConvulsions: student.studentHasConvulsions,
                $studentNeedConstantMedicalSupervision: student.studentNeedConstantMedicalSupervision,
                $educationCenterId01: student.educationCenterId01,
                $groupId01: student.groupId01,
                $studentEnrollmentDate01: student.studentEnrollmentDate01,
                $studentEnrollmentGuardianName01: student.studentEnrollmentGuardianName01,
                $studentEnrollmentSchoolCoordinatorName01: student.studentEnrollmentSchoolCoordinatorName01,
                $enrollmentStatusId01: student.enrollmentStatusId01,
                $educationCenterId02: student.educationCenterId02,
                $groupId02: student.groupId02,
                $studentEnrollmentDate02: student.studentEnrollmentDate02,
                $studentEnrollmentGuardianName02: student.studentEnrollmentGuardianName02,
                $studentEnrollmentSchoolCoordinatorName02: student.studentEnrollmentSchoolCoordinatorName02,
                $enrollmentStatusId02: student.enrollmentStatusId02,
                $educationCenterId03: student.educationCenterId03,
                $groupId03: student.groupId03,
                $studentEnrollmentDate03: student.studentEnrollmentDate03,
                $studentEnrollmentGuardianName03: student.studentEnrollmentGuardianName03,
                $studentEnrollmentSchoolCoordinatorName03: student.studentEnrollmentSchoolCoordinatorName03,
                $enrollmentStatusId03: student.enrollmentStatusId03,
                $educationCenterId04: student.educationCenterId04,
                $groupId04: student.groupId04,
                $studentEnrollmentDate04: student.studentEnrollmentDate04,
                $studentEnrollmentGuardianName04: student.studentEnrollmentGuardianName04,
                $studentEnrollmentSchoolCoordinatorName04: student.studentEnrollmentSchoolCoordinatorName04,
                $enrollmentStatusId04: student.enrollmentStatusId04,
                $educationCenterId05: student.educationCenterId05,
                $groupId05: student.groupId05,
                $studentEnrollmentDate05: student.studentEnrollmentDate05,
                $studentEnrollmentGuardianName05: student.studentEnrollmentGuardianName05,
                $studentEnrollmentSchoolCoordinatorName05: student.studentEnrollmentSchoolCoordinatorName05,
                $enrollmentStatusId05: student.enrollmentStatusId05,
                $educationCenterId06: student.educationCenterId06,
                $groupId06: student.groupId06,
                $studentEnrollmentDate06: student.studentEnrollmentDate06,
                $studentEnrollmentGuardianName06: student.studentEnrollmentGuardianName06,
                $studentEnrollmentSchoolCoordinatorName06: student.studentEnrollmentSchoolCoordinatorName06,
                $enrollmentStatusId06: student.enrollmentStatusId06
            };
            sql = this.insert;
        }
        return this.run(sql,params);
    }

    remove(studentId: number): Promise<sqlite3.RunResult> {
        const params: any = {
            $studentId: studentId
        }
        const sql: string = this.delete;
        return this.run(sql,params);
    }

    private run(sql: string, params?: any): Promise<sqlite3.RunResult> {
        return new Promise<sqlite3.RunResult>((resolve, reject) => {
            if (!this.db) {
                reject(new Error('Database connection not open'));
                return;
            }
            this.db.run(sql, params, function(this: sqlite3.RunResult, err: Error | null): void {
                if (err) {
                    reject(err);
                } else {
                    resolve(this);
                }
            });
        });
    }

}