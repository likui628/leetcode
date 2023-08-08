/**
 * @param {any} object
 * @return {string}
 */
var jsonStringify = function (object) {
    if (object === null) {
      return 'null'
    }
    if (typeof object === 'string') {
      return `"${object}"`
    }
    if (typeof object === 'boolean' || typeof object === 'number') {
      return object.toString()
    }
    if (Array.isArray(object)) {
      return `[${object.map(val => (`${jsonStringify(val)}`))}]`
    }
    if (typeof object === 'object') {
      let objStr = Object.entries(object)
        .map(([key, value]) => (`"${key}":${jsonStringify(value)}`))
        .join(',')
      return `{${objStr}}`
    }
  }
  
  