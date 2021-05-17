class GoodsItem {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
    render() {
        return `<div class="goods-item"><h3>${this.title}</h3><p>${this.price}</p></div>`;
    }
}

class GoodsList {
    constructor() {
        this.goods = [];
    }
    fetchGoods() {
        this.goods = [
            { title: 'Shirt', price: 150 },
            { title: 'Socks', price: 50 },
            { title: 'Jacket', price: 350 },
            { title: 'Shoes', price: 250 },
        ];
    }
    render() {
        let listHtml = '';
        this.goods.forEach((good) => {
            const goodItem = new GoodsItem(good.title, good.price);
            listHtml += goodItem.render();
        });
        document.querySelector('.goods-list').innerHTML = listHtml;
    }
    getTotalPrice() {
        let total_price = 0;
        this.goods.forEach((good) => total_price += good.price);
        // console.log(total_price);
    }
}

class Cart {
    constructor() {
        this.cart_goods = [];
    }
    addItem() {

    }
    deleteItem() {

    }
    deleteAll() {

    }
    getTotalPrice() {

    }
    order() {

    }
}

class CartGood {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
    makeDiscount() {

    }
    plusOne() {

    }
    minusOne() {

    }
}

const list = new GoodsList();
list.fetchGoods();
list.render();
list.getTotalPrice();
