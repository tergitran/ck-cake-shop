<template>
  <div class="checkout-wrapper">
    <div class="checkout-wrapper__title-main">
      <b></b><span>Order Summary</span><b></b>
    </div>
    <Table :items="products" :fields="fields">
      <template #cell(item)="{ item }">
        <div class="product">
          <img style="width: 48px" :src="item.image_url" alt="" />
          <div class="">
            <div>
              {{ item.name }}<span class="ml-4">x {{ item.quantity }}</span>
            </div>
            <div>{{ item.note }}</div>
          </div>
        </div>
      </template>
      <template #cell(subtotal)="{ item }">
        <div>${{ item.quantity * item.price }}</div>
      </template>
    </Table>
    <div class="checkout-wrapper__summary">Order total: ${{ totalPrice }}</div>
    <div class="checkout-wrapper__action">
      <b-button @click="checkout" class="btn text-uppercase mr-4"
        >checkout</b-button
      >
    </div>
  </div>
</template>

<script src="./script.js"></script>
<style src="./style.scss" lang="scss" scoped></style>
