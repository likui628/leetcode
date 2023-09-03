/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
    const len = matrix.length
    const temp = matrix.map(row => [...row])
    for (let i = 0; i < len; ++i) {
        for (let j = 0; j < len; ++j) {
            matrix[j][len - 1 - i] = temp[i][j]
        }
    }
};