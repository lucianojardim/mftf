import {EducationCenter} from '../shared/education-center/education-center.model';
import {Group} from './lookup-values/group/group.model';
import {EnrollmentStatus} from './lookup-values/enrollment-status/enrollment-status.model';

export interface Enrollment {
  educationCenter: EducationCenter;
  group: Group;
  studentEnrollmentDate: Date;
  studentEnrollmentGuardianName: string;
  studentEnrollmentSchoolCoordinatorName: string;
  enrollmentStatus: EnrollmentStatus;
}
