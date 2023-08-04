/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
var chunk = function (arr, size) {
    let result = [], tmp = []

    for (let i = 0; i < arr.length; ++i) {
        tmp.push(arr[i])
        if (tmp.length === size || i === arr.length - 1) {
            result.push(tmp)
            tmp = []
        }
    }

    return result
};