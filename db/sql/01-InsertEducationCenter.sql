CREATE TABLE IF NOT EXISTS `EducationCenter` (
	`EducationCenterId`	INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,
	`EducationCenterName`	TEXT NOT NULL UNIQUE
);

INSERT INTO `EducationCenter` (`EducationCenterId`, `EducationCenterName`) VALUES 
(1, 'Efata');
