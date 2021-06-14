<template>
  <header>
    <input v-model="searchValue" type="text" class="goods-search" />
    <button class="search-button" type="button" @click="onClick">Искать</button>
    <button class="cart-button" type="button" @click="toggleCart">
      Корзина
    </button>
  </header>
</template>

<script>
export default {
  data: () => ({
    searchValue: "",
  }),
  methods: {
    onClick() {
      this.$emit("filter-goods", this.searchValue);
    },
    toggleCart() {
      this.$emit("toogleCartStatus");
    },
  },
  watch: {
    searchValue() {
      this.onClick();
    },
  },
};
</script>

<style scoped>
header {
  padding: 10px;
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 5px 8px 0px rgba(34, 60, 80, 0.2);
}
.cart-button {
  font-size: 16px;
  padding: 10px 20px;
  border: unset;
  border-radius: 10px;
  background-color: white;
  transition: 0.3s;
  box-shadow: 0px 0px 8px 2px rgba(34, 60, 80, 0.2);
  cursor: pointer;
}

.cart-button:hover {
  color: white;
  background-color: black;
}

.goods-search,
.search-button {
  height: 100%;
}
</style>
