import { addtocart } from "./addcart.js";
import { cartpreview } from "./cartpreview.js";


// створюємо масив корзини
export const cart = getcart() ?? [];


// Запускаємо корзину
export function setcart() {

    //витягуємо елемент всіх товарів
    const allgoods = document.querySelector("#catalog-products");
    const hotoffers = document.querySelector("#hot-offer-products");

    // створюємо додавння в корзину подією кліку
    allgoods.addEventListener("click", addtocart)
    hotoffers.addEventListener("click", addtocart)
}

// Виводити товари на сторінку
cartpreview()

// зберігіємо корзину в локал сторадже
export function savecart() {
    localStorage.setItem("cart", JSON.stringify(cart))
}

// отримуємо дані з локал сторадж
function getcart() {
    return JSON.parse(localStorage.getItem('cart'))
}