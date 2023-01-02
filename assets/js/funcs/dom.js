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

/**
 * 
 * @param {string} tagName 
 * @param {Object[]} attributes 
 * @returns {HTMLElement}
 */
export function createElement(tagName, attributes) {
    const c = document.createElement(tagName)
    for (const key in attributes) {
        c.setAttribute(key, attributes[key])
    }

    return c
}


/**
 * 
 * @param {HTMLElement} container 
 */
export function calculator(container) {
    
    const buy = container.querySelector('#buy')
    if (buy) {
        let prices = 0
        container.querySelectorAll('#cart-price').forEach(price => {
            const money = parseInt(price.getAttribute('buy'))
            prices += money
        })
        buy.innerHTML = `${prices}$`
    }
}

/**
 * 
 * @param {int} value 
 * @param {HTMLElement} target 
 * @param {HTMLElement} container 
 */
export function setBuy(value, target, container) {
    const price = parseInt(target.getAttribute('price'))
    target.setAttribute('buy', (value * price))
    calculator(container)
}

/**
 * 
 * @param {HTMLSelectElement} select 
 */
export function createInput(select) {
    select.remove()
    const input = createElement('input', {
        name: 'quantity',
        id: 'quantity',
        type: 'number',
        max: select.getAttribute('max'),
        autofocus: 'autofocus',
        value: 7
    })

    return input
}