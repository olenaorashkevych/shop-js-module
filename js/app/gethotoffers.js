import { APIurl, getData, viewcardproduct } from "../utils.js";

// oтримуємо і виводимо гарячі пропозиції
export async function gethotoffers() {

    // виводимо з БД гарячі пропозиції
    const hotoffers = await getData(APIurl.hotoffers);

    //дістаємо блок з пропозиціями
    const hotofblock = document.getElementById("hot-offer-products")

    // очищаємо від старого html
    hotofblock.innerHTML = ""

    // перебираємо всі гарачі пропозиції
    hotoffers.forEach(element => {

        // виводимо пропозиції на сторінку
        hotofblock.innerHTML += viewcardproduct(element)

    });
}