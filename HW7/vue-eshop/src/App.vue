<template>
  <div id="app">
    <Head @toggle-cart-status="toggleCartStatus" @filter-goods="filterGoods" />
    <main>
      <GoodsList @add-to-cart="addToCart" :goods="filteredGoods" />
      <br />
      <Cart
        @delete-from-cart="deleteFromCart"
        :cartGoods="cartGoods"
        :isVisibleCart="isVisibleCart"
      />
    </main>
  </div>
</template>

<script>
import GoodsList from "./components/GoodsList";
import Head from "./components/Head";
import Cart from "./components/Cart";

const API_URL = "http://localhost:3000";

export default {
  components: {
    GoodsList,
    Head,
    Cart,
  },
  data: () => ({
    goods: [],
    cartGoods: [],
    filteredGoods: [],
    isVisibleCart: false,
  }),
  mounted() {
    this.getGoods();
    this.getCart();
  },
  methods: {
    addToCart(item) {
      this.makePOSTRequest(`${API_URL}/addToCart`, item).then(() =>
        this.getCart()
      );
    },
    deleteFromCart(item) {
      this.makePOSTRequest(`${API_URL}/deleteFromCart`, item).then(() =>
        this.getCart()
      );
    },
    makeGETRequest(url) {
      return fetch(url).then((data) => data.json());
    },
    makePOSTRequest(url, data) {
      return fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((data) => data.json());
    },
    getGoods() {
      this.makeGETRequest(`${API_URL}/catalogData`).then((data) => {
        this.goods = data;
        this.filteredGoods = data;
      });
    },
    getCart() {
      this.makeGETRequest(`${API_URL}/cartData`).then((data) => {
        this.cartGoods = data;
      });
    },
    filterGoods(value) {
      const regexp = new RegExp(value, "i");
      this.filteredGoods = this.goods.filter((good) =>
        regexp.test(good.product_name)
      );
    },
    toggleCartStatus() {
      this.isVisibleCart = !this.isVisibleCart;
    },
  },
};
</script>

<style>
* {
  outline: unset;
}

body {
  margin: unset;
}

main {
  padding: 20px 5%;
}

.goods-item-image-container {
  width: 100%;
  height: 200px;
}
</style>
