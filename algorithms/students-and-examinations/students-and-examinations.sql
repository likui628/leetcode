# Write your MySQL query statement below

SELECT s.student_id, s.student_name, sb.subject_name
	, ifnull(ae.attended_exams, 0) AS attended_exams
FROM Students s
	CROSS JOIN Subjects sb
	LEFT JOIN (
		SELECT stu.student_id, ex.subject_name, COUNT(*) AS attended_exams
		FROM Students stu
			INNER JOIN Examinations ex ON stu.student_id = ex.student_id
		GROUP BY stu.student_id, ex.subject_name
	) ae
	ON s.student_id = ae.student_id
		AND sb.subject_name = ae.subject_name
ORDER BY student_id, subject_name