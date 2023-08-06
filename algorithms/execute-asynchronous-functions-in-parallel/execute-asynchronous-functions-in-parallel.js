/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = async function (functions) {
    return new Promise((resolve, reject) => {
        const res = new Array(functions.length).fill(null)
        let resolveCount = 0;

        functions.forEach((func, idx) => {
            func().then(r => {
                res[idx] = (r)
                resolveCount++
                if (resolveCount === functions.length) {
                    resolve(res)
                }
            }).catch(err => {
                reject(err)
            })
        })
    })
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */