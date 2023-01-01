import { addClass, changeToScrollY, copyright, removeClass } from "./funcs/dom.js";
import { sum } from "./funcs/integer.js";
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