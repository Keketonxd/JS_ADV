<template>
  <div id="app">
    <Head @toggle-cart-status="toggleCartStatus" @filter-goods="filterGoods" />
    <main>
      <GoodsList :goods="filteredGoods" />
      <br />
      <Cart @is-visible-cart="isVisibleCart" />
    </main>
  </div>
</template>

<script>
import GoodsList from "./components/GoodsList";
import Head from "./components/Head";
import Cart from "./components/Cart";

const API_URL =
  "https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses";

export default {
  components: {
    GoodsList,
    Head,
    Cart,
  },
  data: () => ({
    goods: [],
    filteredGoods: [],
    isVisibleCart: false,
  }),
  mounted() {
    this.makeGETRequest(`${API_URL}/catalogData.json`);
  },
  methods: {
    makeGETRequest(url) {
      fetch(url)
        .then((data) => data.json())
        .then((data) => {
          this.goods = data;
          this.filteredGoods = data;
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
