# Write your MySQL query statement below

SELECT product_name, SUM(unit) AS unit
FROM Orders
	LEFT JOIN Products ON Orders.product_id = Products.product_id
WHERE EXTRACT(YEAR_MONTH FROM order_date) = 202002
GROUP BY Orders.product_id
HAVING unit >= 100