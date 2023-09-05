/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let i = 0
    let j = height.length - 1
    let res = 0

    while (i < j) {
        const water = (j - i) * Math.min(height[i], height[j])
        res = Math.max(water, res)

        if (height[i] > height[j]) {
            j--
        } else {
            i++
        }
    }
    return res
};