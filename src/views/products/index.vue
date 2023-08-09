<template>
  <div class="products-wrapper">
    <div class="products-wrapper__title-main"><b></b><span>Our products</span><b></b></div>
    <div class="products-container">
      <Product v-for="product in products" :product="product" :key="product.id"></Product>
    </div>
  </div>
</template>

<script src="./script.js"></script>
<style src="./style.scss" lang="scss" scoped></style>
