/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function (n) {
    let chars = n.toString().split('')
    let prod = 1, add = 0
    chars.forEach(c => {
        let num = Number(c)
        prod *= num
        add += num
    })
    return prod - add
};