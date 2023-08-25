# Write your MySQL query statement below

# Solution 1
SELECT DISTINCT s.product_id, p.product_name
FROM Sales s
	INNER JOIN Product p ON s.product_id = p.product_id
WHERE s.product_id NOT IN (
	SELECT product_id
	FROM Sales
	WHERE sale_date < '2019-01-01'
		OR sale_date > '2019-03-31'
)

# Solution 2
SELECT p.product_id, p.product_name
FROM Product p
	INNER JOIN Sales s ON p.product_id = s.product_id
GROUP BY product_id
HAVING MIN(sale_date) >= '2019-01-01'
AND MAX(sale_date) <= '2019-03-31'

