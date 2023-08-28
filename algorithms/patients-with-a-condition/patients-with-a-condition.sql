# Write your MySQL query statement below

# Solution 1
SELECT *
FROM Patients
WHERE conditions LIKE "DIAB1%"
	OR conditions LIKE "% DIAB1%";

# Solution 2
SELECT *
FROM Patients
WHERE conditions REGEXP '\\bDIAB1';