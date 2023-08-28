# Write your MySQL query statement below

SELECT user_id
	, CONCAT(SUBSTR(Upper(name), 1, 1), SUBSTR(LOWER(name), 2)) AS name
FROM Users
ORDER BY user_id