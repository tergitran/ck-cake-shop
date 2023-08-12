<template>
  <div class="checkout-wrapper">
    <div class="checkout-wrapper__title-main">
      <b></b><span>Order Summary</span><b></b>
    </div>
    <template v-if="products.length">
      <Table :items="products" :fields="fields">
        <template #cell(item)="{ item }">
          <div class="product">
            <img style="width: 48px" :src="item.image_url" alt="" />
            <div class="d-flex">
              <div>
                {{ item.name }}<span class="ml-4">x {{ item.quantity }}</span>
              </div>
              <div v-if="item.note">
                <b-icon icon="pencil" class="mr-2"></b-icon
                ><span class="note-style">{{ item.note }}</span>
              </div>
            </div>
          </div>
        </template>
        <template #cell(subtotal)="{ item }">
          <div>{{ formatValue(item.quantity * item.price) }}</div>
        </template>
      </Table>
      <div class="checkout-wrapper__action">
        <div>
          Order total:
          <span class="font-weight-bold ml-2">{{
            formatValue(totalPrice)
          }}</span>
        </div>
        <b-button @click="checkout" class="btn text-uppercase"
          >checkout</b-button
        >
      </div>
    </template>
    <div v-else>
      Your cart is empty
      <router-link to="/products">
        <b-button variant="outline-dark" class="btn mr-4"
          >Continue Shopping<b-icon
            icon="arrow-right"
            style="margin-left: 8px"
          ></b-icon
        ></b-button>
      </router-link>
    </div>
  </div>
</template>

<script src="./script.js"></script>
<style src="./style.scss" lang="scss" scoped></style>
