# Write your MySQL query statement below

# Solution 1
select employee_id,department_id from Employee
group by employee_id
having count(department_id)=1
union
select employee_id,department_id from Employee
where primary_flag='Y'

# Solution 2
SELECT e.employee_id, e.department_id
FROM Employee e
	INNER JOIN (
		SELECT employee_id, COUNT(department_id) AS cnt
		FROM Employee
		GROUP BY employee_id
	) t
	ON e.employee_id = t.employee_id
WHERE primary_flag = 'Y'
	OR cnt = 1