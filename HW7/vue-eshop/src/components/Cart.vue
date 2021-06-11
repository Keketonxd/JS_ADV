<template>
  <div v-show="isVisibleCart" class="cart">
    Корзина:
    <div class="cart-list">
      <div v-for="item in cartGoods" :key="item.id_product" class="goods-item">
        <h3>{{ item.product_name }}</h3>
        <p>{{ item.price }}</p>
        <button @click="onClick(item)">Удалить</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    isVisibleCart: {
      type: Boolean,
      default: false,
    },
    cartGoods: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    onClick(item) {
      this.$emit("delete-from-cart", item);
    },
  },
};
</script>
<style scoped>
.cart-list {
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  justify-content: space-around;
}

.cart {
  box-shadow: 0px 0px 8px 2px rgba(34, 60, 80, 0.2);
  padding: 20px;
  width: 800px;
  height: 500px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  overflow: auto;
}
</style>