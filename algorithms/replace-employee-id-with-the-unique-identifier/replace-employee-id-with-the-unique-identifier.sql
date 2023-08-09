# Write your MySQL query statement below

SELECT unique_id, name
FROM EmployeeUNI U
	RIGHT JOIN Employees E ON U.id = E.id