/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
    var ar = [];
    for (var i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            ar.push(arr[i]);
        }
    }
    return ar;
};