import { countcart } from "./countcart.js";
import { cart, savecart } from "./setcart.js";


// функція превью корзини
export function cartpreview() {

    // витягуємо елемент превью блок
    const previewblock = document.getElementById("js-cart-added-list")

    // очищаємо блок перед виводом
    previewblock.innerHTML = ""

    // перебрати корзину і для всіх товарів вивести блоки 
    cart.forEach(element => {

        // заповнюємо хтмл блока превью
        previewblock.innerHTML = previewblock.innerHTML + `
        <div class="cart-added-list__item">
            <button class="cart-added-list__item-btn-delete btn btn-light btn-xxs btn-icon">
                <svg class="icon icon-close"><use href="#icon-close"></use></svg>
            </button>
            <img src="img/catalog/${element.image}" alt="" class="cart-added-list__item-img">
            <p class="cart-added-list__item-text-hold">
                <a href="#" class="cart-added-list__item-title-link">${element.title}</a>
                <span class="cart-added-list__item-meta-list">
                    <span class="cart-added-list__item-meta">Ціна: ${element.price} грн</span>
                </span>
            </p>
            <input type="text" class="cart-added-list__item-count" placeholder="0" value="${element.count}">
            <button class="cart-added-list__item-btn-plus btn btn-light btn-xxs btn-icon"></button>
            <button class="cart-added-list__item-btn-minus btn btn-light btn-xxs btn-icon"></button>
        </div>`
    });

    // підраховуємо кількість товарів в корзині
    countcart()

    //Зберіємо корзину в localstorage
    savecart();
}