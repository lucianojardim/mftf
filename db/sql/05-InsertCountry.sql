CREATE TABLE IF NOT EXISTS `LocalityCountry` (
	`LocalityCountryId`	INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,
	`LocalityCountryName`	TEXT NOT NULL UNIQUE,
	`LocalityCountryAbbreviation`	TEXT NOT NULL
);
INSERT INTO `LocalityCountry` 
(`LocalityCountryId`, `LocalityCountryName`, `LocalityCountryAbbreviation`) VALUES 
(1, 'Brasil', 'BR');
