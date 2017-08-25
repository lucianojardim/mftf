CREATE TABLE IF NOT EXISTS `EnrollmentStatus` (
	`EnrollmentStatusId`	INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,
	`EnrollmentStatusDesc`	TEXT NOT NULL UNIQUE
);
INSERT INTO `EnrollmentStatus` (`EnrollmentStatusId`, `EnrollmentStatusDesc`) VALUES 
(1, 'Entered'),
(2, 'Reviwed');
