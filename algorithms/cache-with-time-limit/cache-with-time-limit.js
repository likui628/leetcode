var TimeLimitedCache = function () {
    this.cache = {}
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {
    const currentTime = Date.now();
    let ret = false
    if (this.cache[key] &&
        this.cache[key].expiration > currentTime) {
        ret = true
    }
    this.cache[key] = { value, expiration: currentTime + duration }
    return ret
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function (key) {
    const currentTime = Date.now();
    if (this.cache[key] &&
        this.cache[key].expiration > currentTime) {
        return this.cache[key].value
    }
    return -1
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function () {
    const currentTime = Date.now();

    return Object.entries(this.cache)
        .filter(([_, value]) => value.expiration > currentTime)
        .length
};

var obj = new TimeLimitedCache()
console.log(obj.set(1, 42, 1000)); // false
console.log(obj.get(1)) // 42
console.log(obj.count()) // 1
