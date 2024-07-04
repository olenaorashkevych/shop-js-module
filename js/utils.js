// всі API посилання, які використовуються в проекті
export const APIurl = {
    categories: "https://667a796bbd627f0dcc8f205a.mockapi.io/categories",
    goods: "https://667a796bbd627f0dcc8f205a.mockapi.io/products",
    hotoffers: "https://667a796bbd627f0dcc8f205a.mockapi.io/products?hotoffer=yes",
    goodsbycat: "https://667a796bbd627f0dcc8f205a.mockapi.io/products?catid=",
    search: "https://667a796bbd627f0dcc8f205a.mockapi.io/products?search="
}


// загальна фунція для отримання даних
export async function getData(url) {

    // запит до сервера
    const result = await fetch(url)

    // перетворення відповіді в JSON
    const answer = await result.json()

    //повертаємо дані з сервера
    return (answer == "Not found") ? [] : answer;
}


// Функція добавлення класу активності
function setActive(e) {

    // Отримуємо блок з яким потрібно працювати
    const box = e.target.getAttribute('data-box-toggle');

    // Добавляємо або забираємо клас активності
    document.querySelector(box).classList.toggle('show');

    // Добавляємо кнопці клас актисності
    e.target.classList.toggle('active');
}

// Вішаємо функцію на всі кнопки, яким потрібний стан активності
const boxes = document.querySelectorAll('[data-box-toggle]');
if (boxes.length > 0) {
    boxes.forEach(element => {
        element.onclick = setActive;
    });
}

// вивід карточки товару
export function viewcardproduct(good) {

    return `<div class="card-product">
        <div class="card-product__img-hold">
            <img src="img/catalog/${good.img}" alt="" class="card-product__img">
        </div>
        <div class="card-product__text-hold">
            <a href="#" class="card-product__title-link">${good.title}</a>
            <span class="card-product__price">${good.price} грн <small>${good.oldprice} грн</small></span>
            <a href="#" class="card-product__btn-add js-addcart"
                data-title='${good.title}'
                data-price="${good.price}"
                data-image="${good.img}"
                data-count="1"
            >
                <svg class="icon icon-cart">
                    <use href="#icon-cart-add"></use>
                </svg>
            </a>
        </div>
    </div>`;
}



// посилання для отримання товарів
export function createurl(param, type) {

    // за замовчуванням робимо посиланя на всі товари
    let url = APIurl.goods;

    // якщо параметри відповідають категорії
    if (param != "all" && type == "category") {

        // змінюємо посилання, щоб отримати товари по категорії
        url = APIurl.goodsbycat + param;
    }

    // якщо параметри відповідають категорії
    if (param != "all" && type == "findgoods") {

        // змінюємо посилання, щоб отримати товари по категорії
        url = APIurl.search + param;
    }

    return url;
}
