CREATE TABLE IF NOT EXISTS `Race` (
	`RaceId`	INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,
	`RaceDesc`	TEXT NOT NULL UNIQUE
);
INSERT INTO `Race` (`RaceId`,`RaceDesc`)VALUES 
(1, 'Asian'),
(2,'Black'),
(3,'Native American'),
(4, 'White'),
(5, 'Mixed')
;
