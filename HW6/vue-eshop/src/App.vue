<template>
  <div id="app">
    <Head />
    <main>
      <GoodsList :goods="filteredGoods" />
      <br />
      <Cart />
    </main>
  </div>
</template>

<script>
// 1. Вынести весь хэдер в компонент
// 2. Вынести корзину в компонент
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
    searhLine: "",
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
    filterGoods() {
      const regexp = new RegExp(this.searhLine, "i");
      this.filteredGoods = this.goods.filter((good) =>
        regexp.test(good.product_name)
      );
    },
    toggleCartStatus() {
      this.isVisibleCart = !this.isVisibleCart;
    },
  },
  watch: {
    searhLine() {
      this.filterGoods();
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
