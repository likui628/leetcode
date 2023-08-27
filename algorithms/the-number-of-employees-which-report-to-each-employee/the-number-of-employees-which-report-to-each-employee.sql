# Write your MySQL query statement below

SELECT r.reports_to AS employee_id, e.name, COUNT(r.employee_id) AS reports_count
	, ROUND(AVG(r.age), 0) AS average_age
FROM Employees r
	INNER JOIN Employees e ON r.reports_to = e.employee_id
GROUP BY r.reports_to
HAVING r.reports_to IS NOT NULL
ORDER BY employee_id