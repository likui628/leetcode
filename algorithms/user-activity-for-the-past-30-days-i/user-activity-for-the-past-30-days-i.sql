# Write your MySQL query statement below

# Solution 1
SELECT activity_date AS day, COUNT(DISTINCT user_id) AS active_users
FROM Activity
WHERE activity_date < '2019-07-27'
	AND activity_date > DATE_SUB("2019-07-27", INTERVAL 30 DAY)
GROUP BY activity_date
ORDER BY activity_date DESC

# Solution 2
SELECT activity_date AS day, COUNT(DISTINCT user_id) AS active_users
FROM Activity
GROUP BY activity_date
HAVING activity_date < '2019-07-27'
AND activity_date > DATE_SUB("2019-07-27", INTERVAL 30 DAY)
ORDER BY activity_date DESC