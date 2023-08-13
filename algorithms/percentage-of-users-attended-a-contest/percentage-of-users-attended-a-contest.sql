# Write your MySQL query statement below

WITH all_users AS (
		SELECT COUNT(*) AS total_cnt
		FROM Users
	)
  
SELECT contest_id
	, Round(COUNT(user_id) / (
		SELECT total_cnt
		FROM all_users
	) * 100, 2) AS percentage
FROM Register
GROUP BY contest_id
ORDER BY percentage DESC, contest_id ASC