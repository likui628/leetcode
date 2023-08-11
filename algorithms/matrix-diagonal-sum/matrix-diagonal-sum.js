/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function (mat) {
    const len = mat.length
    const lastIndex = len - 1
    let result = 0
    for (let i = 0; i < len; i++) {
        result += mat[i][i]
        if (lastIndex - i !== i) {
            result += mat[lastIndex - i][i]
        }
    }
    return result
};