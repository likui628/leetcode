/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const pairMap = new Map([
        [")", "("],
        ["}", "{"],
        ["]", "["],
    ])

    let arr = []
    for (let c of s) {
        if (pairMap.has(c)) {
            if (pairMap.get(c) !== arr[arr.length - 1]) {
                return false
            }
            arr.pop()
        } else {
            arr.push(c)
        }
    }
    return arr.length === 0
};