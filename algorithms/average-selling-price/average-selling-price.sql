# Write your MySQL query statement below

SELECT product_id
	, round(SUM(sales) / SUM(units), 2) AS average_price
FROM (
	SELECT p.product_id, p.price * u.units AS sales, u.units
	FROM Prices p
		INNER JOIN UnitsSold u
		ON p.product_id = u.product_id
			AND u.purchase_date BETWEEN p.start_date AND p.end_date
) t
GROUP BY product_id