import { 
    addClass, 
    calculator, 
    changeToScrollY, 
    copyright, 
    createInput,
    removeClass, 
    setBuy } from "./funcs/dom.js";
import { isInteger, sum } from "./funcs/integer.js";
import { extract } from "./funcs/string.js";

const navToggle = document.querySelector("#nav-toggle")
const navMenu = document.querySelector('#nav-menu')
const navClose = document.querySelector("#nav-close")

if (navToggle && navMenu && navClose) {
    navToggle.addEventListener("click", (e) => {
        e.preventDefault()
        addClass(navMenu)
    })
    navClose.addEventListener("click", (e) => {
        e.preventDefault()
        removeClass(navMenu)
    })
}

const header = document.querySelector('#header')
if (header) {
    window.addEventListener('scroll', () => changeToScrollY(header, 'scroll-header', 50))
}


const scrollTop = document.querySelector('#scroll-top')
if (scrollTop) {
    window.addEventListener('scroll', () => changeToScrollY(scrollTop, 'active', 400))
}


const copy = document.querySelector("#copy")
if (copy) {
    copyright(copy)
}

// container des carts 
// pour le panier des produits
const container = document.querySelector("#cart-container")
if (container) {
    // on récupère tous les carts
    const carts = container.querySelectorAll("#cart")
    if (carts) {
        // pour chaque cart
        carts .forEach(cart => {
            const desc = cart.querySelector('#desc-quantity')
            const select = desc.querySelector("select#quantity")
            const price = cart.querySelector('#cart-price')

            // changer la quantité
            if (select) {
                select.addEventListener('input', () => {
                    if (select.value === '') return
    
                    if (select.value === 'other') {
                        // dans les cas d'un nombre plus élevé
                        const input = createInput(select)

                        desc.append(input)

                        setBuy(input.value, price, container)

                        // lorsqu'il change une valeur dans l'input
                        input.addEventListener('input', () => {
                            if (input.value === '') return
    
                            let value = parseInt(input.value)
                            
                            // essaie de modifier une valeur en string
                            // valeur saisie n'est pas un nombre.
                            if (isNaN(value)) {
                                input.value = parseInt(input.value)
                                alert('la quantité n\'est pas denombrable.')
                            }  else {
                                // nombre max de la quantité
                                // depend du stock
                                const max = parseInt(input.getAttribute('max') ?? 0)
                                if (value >= max) input.value = max
                                else if (value <= 0) input.value = 1
                            }

                            // récalcul le prix final 
                            setBuy(value, price, container)  

                        })
                    }
                    else {
                        let value = parseInt(select.value)
                        setBuy(value, price, container)
                    }
                })
            } 
            calculator(container)
        })
    }
   
    const buy = container.querySelector("#cart-buy")
    if (buy) {
        window.addEventListener('scroll', () => changeToScrollY(buy, 'sticky', 300))
        
    }
}
