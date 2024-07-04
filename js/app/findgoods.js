import { getallgoods } from "./getallgoods.js"

export function findgoods() {

    // витягуємо елемент кнопки пошуку і введене значення
    const searchbtn = document.getElementById("btn-search")
    const searchword = document.getElementById("input-search")

    // пробуємо отримати пошукову фразу
    let search = localStorage.getItem('searchkey');

    // перевіряємо чи є пошукова фраза при завантаженні сторінки
    if (search == null) {

        // Виводимо всі товари
        getallgoods()

    } else {

        // внесемо останню пошукову фразу на сайт
        searchword.value = search

        // вивести товари відносно пошуку
        getallgoods(search, 'findgoods')
    }

    // вішаємо подію на кнопку пошуку
    searchbtn.addEventListener("click", () => {

        // відібрати значення тексту
        search = searchword.value

        // якщо пошукової фрази немає, виводимо все 
        if (search == "") {

            // виводимо всі товари
            getallgoods()
        }
        else {

            // виводимо товари по пошуковій фразі
            getallgoods(search, 'findgoods')

            // зберігаємо пошукову фразу
            localStorage.setItem("searchkey", search);
        }
    })
}


