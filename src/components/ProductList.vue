<template>
  <ul class="catalog__list">
    <li class="catalog__item" v-for="product in products" :key="product.id">
     <ProductItem :product="product"></ProductItem>
    </li>
  </ul>
</template>

<script>
import ProductItem from '@/components/ProductItem.vue';

export default {
  components: { ProductItem },
  props: ['products'],
  name: 'ProductList',
  comments: {
    ProductItem,
  },
};
</script>

<style scoped>

</style>
