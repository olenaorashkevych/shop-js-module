import { setcart } from "./app/cart/setcart.js";
import { findgoods } from "./app/findgoods.js";
import { getallgoods } from "./app/getallgoods.js";
import { getcat } from "./app/getcat.js";
import { gethotoffers } from "./app/gethotoffers.js";


// відбираємо клас з боді, щоб зрозуміти на якій ми сторінці
const page = document.querySelector("body").className;

// робимо перемикач між сторінками
switch (page) {
    case "page-home":

        // виводимо категорії на сторінку
        getcat()

        // виводимо товари на сторінку
        getallgoods()

        // виводимо гарячі пропозиції
        gethotoffers()

        // запускаємо функціонал корзини
        setcart()
        break;

    case "page-search":

        // виводимо гарячі пропозиції
        gethotoffers()

        // виводимо товари з пошуку
        findgoods()

        // запускаємо функціонал корзини
        setcart()

        break;
}