/**
 * @param {any} o1
 * @param {any} o2
 * @return {boolean}
 */
var areDeeplyEqual = function (o1, o2) {
    if (typeof o1 !== 'object' || o1 === null || o2 === null) {
        return o1 === o2;
    }

    const isArrayO1 = Array.isArray(o1)
    const isArrayO2 = Array.isArray(o2)
    if (isArrayO1 != isArrayO2) {
        return false
    }
    if (isArrayO1) {
        if (o1.length !== o2.length) {
            return false
        }
        for (let i = 0; i < o1.length; ++i) {
            if (!areDeeplyEqual(o1[i], o2[i])) {
                return false
            }
        }
    } else {
        const keysO1 = Object.keys(o1)
        const keysO2 = Object.keys(o2)
        if (keysO1.length !== keysO2.length) {
            return false
        }

        for (let i = 0; i < keysO1.length; ++i) {
            const key = keysO1[i]
            if (!o2.hasOwnProperty(key)) {
                return false
            }
            if (!areDeeplyEqual(o1[key], o2[key])) {
                return false
            }
        }
    }
    return true
} 