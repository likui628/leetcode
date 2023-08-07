/**
 * @param {Object} obj
 * @return {Object}
 */
var compactObject = function (obj) {
    function dfs(obj) {
        if (!obj) return false
        if (typeof obj !== 'object') return obj

        if (Array.isArray(obj)) {
            const newArr = []
            for (let i = 0; i < obj.length; ++i) {
                let res = dfs(obj[i])
                if (res) {
                    newArr.push(dfs(obj[i]))
                }
            }
            return newArr
        }

        const newObj = {}
        for (let key in obj) {
            const res = dfs(obj[key])
            if (res) {
                newObj[key] = res
            }
        }
        return newObj
    }
    return dfs(obj)
};