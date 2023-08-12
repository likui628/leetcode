# Write your MySQL query statement below

SELECT p.machine_id AS machine_id
	, round(AVG(q.timestamp - p.timestamp), 3) AS processing_time
FROM Activity p
	INNER JOIN Activity q
	ON p.process_id = q.process_id
		AND p.machine_id = q.machine_id
		AND p.activity_type = 'start'
		AND q.activity_type = 'end'
GROUP BY machine_id