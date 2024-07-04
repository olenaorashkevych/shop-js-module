import { APIurl, createurl, getData, viewcardproduct } from "../utils.js";

// cтворюємо функцію виводу товарів домашня
export async function getallgoods(param = 'all', type = 'category') {

    /**
     * 1. Формуємо посилання
     */
    const url = createurl(param, type);
    console.log(url);


    /**
     * Отримуємо з документу блок в який треба виводити товари і блок з цифрою кількості
     */

    // отримаємо блок для виводу товарів
    const allgoods = document.querySelector("#catalog-products")

    //обновити кількість товарів
    const foundgoods = document.getElementById("view-count-products");

    // перед вивовдом тварів очистити html
    allgoods.innerHTML = ""

    // отримаємо масив всіхтоварів 
    const allgoodsApi = await getData(url)

    // перебираємо товари і виводимо кожний в хтмл
    if (allgoodsApi.length == 0) {

        // повідомляємо,що товарів не знайдено
        allgoods.innerHTML = "<h2>товарів не знайдено</h2>"
    } else {

        // перебираємто товари і виводимо в хтмл
        allgoodsApi.forEach(good => {

            //вивід товарів на сторінку
            allgoods.innerHTML += viewcardproduct(good);
        })
    }

    // оновлюємо кількість товарів
    foundgoods.innerHTML = allgoodsApi.length;
}