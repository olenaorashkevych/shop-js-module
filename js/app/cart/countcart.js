import { cart } from "./setcart.js";

// функція підрахунку  доданих товарів
export function countcart() {

    // отримат елемент з кількістю в корзині
    const quantity = document.querySelectorAll(".js-cart-added-summ")

    // перебираємо всі такі елементи 
    quantity.forEach(element => {

        // показуємо елемент на сторінці доданням класу
        element.classList.add("show-num")

        // виводимо кількість доданих товарів
        element.innerHTML = cart.length
    });
}
