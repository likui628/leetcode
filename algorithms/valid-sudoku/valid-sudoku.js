/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    const rows = new Array(9).fill(0).map(() => ({}))
    const columns = new Array(9).fill(0).map(() => ({}))
    const boxes = new Array(3).fill(0).map(() => [{}, {}, {}])

    for (let i = 0; i < 9; ++i) {
        for (let j = 0; j < 9; ++j) {
            const val = board[i][j]
            if (val === '.') {
                continue
            }
            rows[i][val] = (rows[i][val] || 0) + 1
            columns[j][val] = (columns[j][val] || 0) + 1

            const box_i = Math.floor(i / 3)
            const box_j = Math.floor(j / 3)
            boxes[box_i][box_j][val] = (boxes[box_i][box_j][val] || 0) + 1
            
            if (rows[i][val] > 1
                || columns[j][val] > 1
                || boxes[box_i][box_j][val] > 1) {
                return false
            }
        }
    }
    return true
};