<template>
  <div>
    <a class="catalog__pic" href="#">
      <img :src="product.thumb.src" :alt="product.thumb.alt">
    </a>

    <h3 class="catalog__title">
      <a href="#">
        {{ product.name }}
      </a>
    </h3>

    <span class="catalog__price">
          {{ product.price }} ₽
        </span>

    <ul class="colors colors--black">
      <li class="colors__item">
        <label class="colors__label">
          <input class="colors__radio sr-only"
                 type="radio" name="color-1"
                 value="#73B6EA" checked="">
          <span class="colors__value" style="background-color: #73B6EA;"></span>
        </label>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['product'],
  name: 'ProductItem',
};
</script>

<style scoped>

</style>
