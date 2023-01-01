
/**
 * Permet couper une chaine
 * 
 * @param {string} data 
 * @param {int} limit 
 */
export function extract(data, limit = 30) {
    if (data.length <= limit) return data
    return data.slice(0, limit) + '...'
}

