CREATE TABLE IF NOT EXISTS `Schooling` (
	`SchoolingId`	INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,
	`SchoolingDesc`	TEXT
);
INSERT INTO `Schooling` (`SchoolingId`,`SchoolingDesc`)VALUES 
(1, 'Other'),
(2, 'High School'),
(3, 'College'),
(4, 'Graduate')
;
