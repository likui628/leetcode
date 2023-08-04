/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function (functions) {
    return function (x) {
        let ret = x
        for (let i = functions.length - 1; i >= 0; i--) {
            ret = functions[i](ret)
        }
        return ret
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */