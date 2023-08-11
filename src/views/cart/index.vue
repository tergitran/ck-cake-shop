<template>
  <div class="cart-wrapper">
    <div class="cart-wrapper__title-main"><b></b><span>CART</span><b></b></div>
    <template v-if="products.length">
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
          <div>{{ formatValue(item.price) }}</div>
        </template>
        <template #cell(subtotal)="{ item }">
          <div>{{ formatValue(item.quantity * item.price) }}</div>
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
        <router-link to="/products">
          <b-button class="btn mr-4">Continue Shopping</b-button>
        </router-link>
        <router-link to="/checkout">
          <b-button class="btn text-uppercase mr-4">cart confirmation</b-button>
        </router-link>
      </div>
    </template>
    <div v-else>
      Your cart is empty
      <router-link to="/products">
        <b-button class="btn mr-4">Continue Shopping</b-button>
      </router-link>
    </div>
  </div>
</template>

<script src="./script.js"></script>
<style src="./style.scss" lang="scss" scoped></style>
