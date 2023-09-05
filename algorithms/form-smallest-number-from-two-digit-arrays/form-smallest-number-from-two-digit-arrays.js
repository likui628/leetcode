/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minNumber = function (nums1, nums2) {
    let ret = 10;
    for (let n of nums2) {
        if (nums1.find(i => i === n)) {
            ret = Math.min(n, ret)
        }
    }

    if (ret !== 10) {
        return ret
    }

    const x = Math.min(...nums1);
    const y = Math.min(...nums2);
    return Math.min(x * 10 + y, y * 10 + x)
};