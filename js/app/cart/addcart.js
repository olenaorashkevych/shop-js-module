import { cartpreview } from "./cartpreview.js";
import { cart } from "./setcart.js";


// функція додавання товару в корзину
export function addtocart(event) {
    event.preventDefault()

    //перевіряємо елемент на наявність мітки 
    if (event.target.classList.contains("js-addcart")) {

        // отримуємо інормацію про товар по якому клікнули
        const product = event.target.dataset;

        // перевіряємо чи є цей товар вже в корзині
        const productExist = cart.findIndex((item) => item.title == product.title)

        // якщо товару немає, додаємо в массив, якщо є, збільшуємо кількість count
        if (productExist == -1) {

            // якщо немає товару, додаємо в массив
            cart.push(product)
        } else {

            // якщо є, збільшуємо кількість count
            cart[productExist].count++;
            // або cart[productExist].count=cart[productExist].count + 1

        }

        // виводимо товари в попередній перегляд корзини
        cartpreview()
    }

}