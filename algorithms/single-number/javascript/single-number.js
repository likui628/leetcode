/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let map = new Map();

  nums.forEach((i) => {
    map.has(i) ? map.set(i, map.get(i) + 1) : map.set(i, 1);
  });

  for (const [key, value] of map) {
    if (value === 1) {
      return key;
    }
  }
};
