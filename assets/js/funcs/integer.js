

/**
 * 
 * @param  {...int[]|float[]} data 
 */
export function sum (...data) {
    let sum = 0
    data.forEach(v => {
        sum += v
    })

    return sum
}

/**
 * 
 * @param {string|int} value 
 * @returns {boolean}
 */
export function isInteger(value) {
    return isNaN(value)
}
