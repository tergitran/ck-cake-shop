<template>
  <div class="cart-container">
    <div v-if="product.is_on_discount" class="ribbon-wrapper">
      <div class="ribbon">Sale</div>
    </div>
    <div class="cart-container__image">
      <img :src="product.image_url" alt="" />
    </div>
    <div class="cart-container__title">{{ product.name }}</div>
    <div class="cart-container__description">{{ product.description }}</div>
    <div class="cart-container__price">
      <span :class="product.is_on_discount && 'discount'"
        >{{ product.original_price }}$</span
      >
      <span v-if="product.is_on_discount">{{ product.discounted_price }}$</span>
    </div>
    <span class="cart-container__action">
      <button class="btn" v-if="true">
        <b-icon icon="cart-plus" style="width: 24px; height: 24px"></b-icon>
      </button>
      <button class="btn" v-else>View cart</button>
    </span>
  </div>
</template>

<script src="./script.js"></script>
<style src="./style.scss" lang="scss" scoped></style>
