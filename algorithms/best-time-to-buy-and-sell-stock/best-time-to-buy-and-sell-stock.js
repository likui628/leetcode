/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let minPrice = Number.MAX_SAFE_INTEGER
    let maxProfit = 0
    for (let price of prices) {
      if (price < minPrice) {
        minPrice = price
      } else {
        maxProfit = Math.max(price - minPrice, maxProfit)
      }
    }
    return maxProfit
  };