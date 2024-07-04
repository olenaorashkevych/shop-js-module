import { APIurl, getData } from "../utils.js";
import { getallgoods } from "./getallgoods.js";

// виводимо категорії на сторінку
const categlist = document.getElementById("category-list")

// створюємо фунцію для виводу категорій
export async function getcat() {

    //отримати список категорій
    const catApiList = await getData(APIurl.categories)

    // перебираємо елементи категорій
    catApiList.forEach(catInfo => {

        //  виводимо категорії на сторінку
        categlist.innerHTML += `<a href="${catInfo.id}" class="dropdown-item">${catInfo.title}</a>`
    });

}


// функція при кліку на категорію,яка виводить її товари
if (categlist) {
    categlist.addEventListener('click', (event) => {
        event.preventDefault();

        // зберегти вибрану категорію в змінній
        const chosencat = event.target;

        // отримаємо id категорії
        const catid = chosencat.getAttribute("href")

        // виводимо товари певної категоріi
        getallgoods(catid)


    })
}