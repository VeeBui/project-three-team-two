DROP TABLE IF EXISTS Victoria;

CREATE TABLE Victoria (
	B_HashedKey decimal,
  	B_FullName varchar,
  	B_ShortName varchar,
  	B_StreetAddress varchar,
	B_Suburb varchar,
	B_PostCode integer,
 	B_State varchar,
  	B_Geocode varchar,
 	B_Longitude decimal,
 	B_Latitude decimal,
 	CRT_HashedKey decimal,
	CRT_Nabers_ReferenceNumber varchar,
	CRT_Nabers_StarRating decimal,
	CRT_Nabers_RatedArea decimal,
	CRT_Nabers_RatedHours decimal,
	CRT_Nabers_RatingScope varchar,
	CRT_Nabers_AnnualEmissions decimal,
	CRT_Nabers_AnnualEmissionIntensity decimal,
	CRT_Nabers_AnnualConsumption decimal,
	CRT_Nabers_OwnerName varchar,
	TLA_Name varchar,
	TLA_AssessorName varchar,
	TLA_NetLettableSpace decimal,
	FS_Name varchar,
	FS_Level decimal,
	FS_NLA decimal,
	CRT_BuildingNla decimal,
	CRT_NumberOfLevels decimal
	);

-- Verify successful data import
SELECT * FROM Victoria;
