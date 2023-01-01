import { getYear } from "./date.js"

/**
 * 
 * @param {Element} element 
 * @param {string} toggle 
 */
export function addClass(element, toggle = 'show') {
    if (element.classList.contains(toggle)) return
    
    element.classList.add(toggle)
}


/**
 * 
 * @param {Element} element 
 * @param {string} toggle 
 */
export function removeClass(element, toggle = 'show') {
    
    element.classList.remove(toggle)
}

/**
 * 
 * @param {Element} el 
 * @param {string} attr 
 * @param {int} equals 
 */
export function changeToScrollY(el, attr, equals = 50) {
    window.scrollY >= equals 
    ? addClass(el, attr) 
    : removeClass(el, attr)
}

/**
 * 
 * @param {Element} el 
 */
export function copyright(el) {
    el.innerHTML  = `&copy; ${getYear()}  <strong>E-commerce</strong>, Tous droits réservés ` 
}