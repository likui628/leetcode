# Write your MySQL query statement below

SELECT name, population, area
FROM World W
WHERE W.area >= 3000000
	OR population >= 25000000