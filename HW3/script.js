const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses'

// немного порылся в промисах, чтобы сократить запись, самое весёлое - работает))
const makeGETRequest = (url, cb) => new Promise((res, rej) => {
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhr.onload = () => res(cb(xhr.responseText));
    xhr.onerror = () => rej(xhr.statusText);
    xhr.open('GET', url, true);
    xhr.send();
})


// const makeGETRequest = (url, callback) => {
//     let xhr;

//     if (window.XMLHttpRequest) {
//         xhr = new XMLHttpRequest();
//     } else if (window.ActiveXObject) {
//         xhr = new ActiveXObject("Microsoft.XMLHTTP");
//     }

//     xhr.onreadystatechange = function () {
//         if (xhr.readyState === 4) {
//             callback(xhr.responseText);
//         }
//     }

//     xhr.open('GET', url, true);
//     xhr.send();
// }

class GoodsItem {
    constructor(product_name, price) {
        this.product_name = product_name;
        this.price = price;
    }

    render() {
        return `<div class="goods-item"><h3>${this.product_name}</h3><p>${this.price}</p></div>`;
    }
}

class GoodsList {
    constructor() {
        this.goods = [];
    }

    fetchGoods(cb) {
        makeGETRequest(`${API_URL}/catalogData.json`, (goods) => {
            this.goods = JSON.parse(goods);
            cb();
        })
    }

    render() {
        let listHtml = '';
        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good.product_name, good.price);
            listHtml += goodItem.render();
        });
        document.querySelector('.goods-list').innerHTML = listHtml;
    }

    getTotalSum() {
        const totalSum = this.goods.reduce((acc, item) => {
            if (!item.price) return acc;
            return acc + item.price;
        }, 0);
        console.log(totalSum);
    }
}

const list = new GoodsList();
list.fetchGoods(() => {
    list.render();
});



class Cart extends GoodsList {
    constructor(...args) {
        cart = []
        ids = []
    }

    //пока что так, если что - доработаю по нужной структуре
    addItem(id) {
        list.goods.forEach(function (good) {
            //Чтобы избегать повторений
            if (id === good.id && ids.indexOf(id) == -1) {
                this.cart.push(good)
                this.ids.push(id)
            }
            //тут можно будет увеличить количество на 1, если индекс совпадёт с корзинным, но для этого пока нет аргументов.
        })
    }
    deleteItem(id) {
        list.cart.forEach(function (good) {
            if (id === good.id) {
                let el = list.goods.indexOf(good)
                if (el > -1) {
                    this.cart.splice(el, 1);
                }
            }
        })
    }
    getCartGoods() {

    }
    deleteAll() {

    }
    getTotalPrice() {

    }
    order() {

    }
}

class CartGood extends GoodsItem {
    constructor(...args) {
        super(...args);
        this.count = 0;
    }

    makeDiscount() {

    }
    plusOne() {

    }
    minusOne() {

    }
}
