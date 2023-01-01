

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