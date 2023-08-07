/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    for (let i = 0; i < matrix.length; ++i) {
        const len = matrix[i].length

        if (matrix[i][len - 1] >= target) {
            for (let j = 0; j < len; ++j) {
                if (matrix[i][j] === target) {
                    return true
                }
            }
            return false
        }
    }
    return false
};