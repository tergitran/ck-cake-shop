<template>
  <div class="cart-wrapper">
    <div class="cart-wrapper__title-main"><b></b><span>CART</span><b></b></div>
    <Table :items="products" :fields="fields">
      <template #cell(item)="{ item }">
        <div class="product">
          <img style="width: 100px" :src="item.image_url" alt="" />
          <div class="">
            <div>{{ item.name }}</div>
            <TextInput
              :value="item.note"
              placeholder="Enter message on cake"
              @onChange="(val) => handleChangeNote(item.id, val)"
            />
          </div>
        </div>
      </template>
      <template #cell(quantity)="{ item }">
        <div>
          <NumberInput
            :value="item.quantity"
            @onChange="(val) => handleChangeQuantity(item.id, val)"
          />
        </div>
      </template>
      <template #cell(price)="{ item }">
        <div>${{ item.price }}</div>
      </template>
      <template #cell(subtotal)="{ item }">
        <div>${{ item.quantity * item.price }}</div>
      </template>
      <template #cell(action)="{ item }">
        <div>
          <b-icon-trash
            role="button"
            @click="handleDeleteProduct(item.id)"
          ></b-icon-trash>
        </div>
      </template>
    </Table>
    <div class="cart-wrapper__action">
      <router-link to="/checkout">
        <b-button class="btn text-uppercase mr-4">cart confirmation</b-button>
      </router-link>
    </div>
  </div>
</template>

<script src="./script.js"></script>
<style src="./style.scss" lang="scss" scoped></style>
