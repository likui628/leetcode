/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    let str = s.toLowerCase().replace(/[^0-9a-z]/g, '')
    let i = 0; j = str.length - 1;
    while (i < j) {
        if (str[i] !== str[j]) {
            return false
        }
        i++
        j--
    }
    return true
};