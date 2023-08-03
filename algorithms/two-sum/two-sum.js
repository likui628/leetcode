// solution 1
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; ++i) {
    for (let j = i + 1; j < nums.length; ++j) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

// solution 2
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  let map = new Map();
  nums.forEach((value, index) => {
    map.set(value, index);
  });

  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];

    if (map.has(complement) && i !== map.get(complement)) {
      return [map.get(complement), i];
    }
  }
};
