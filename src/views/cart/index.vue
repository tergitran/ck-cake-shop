<template>
  <div class="cart-wrapper">
    <div class="cart-wrapper__title-main"><b></b><span>CART</span><b></b></div>
    <template v-if="products.length">
      <Table :items="products" :fields="fields">
        <template #cell(item)="{ item }">
          <div class="product">
            <img style="width: 100px" :src="item.image_url" alt="" />
            <div class="product__detail">
              <div class="d-flex justify-content-between">
                <div>
                  <div class="product__detail--name">{{ item.name }}</div>
                  <TextInput
                    :value="item.note"
                    placeholder="Enter message on cake"
                    @onChange="(val) => handleChangeNote(item.id, val)"
                  />
                </div>
                <b-icon-trash
                  class="d-sm-none"
                  role="button"
                  @click="handleDeleteProduct(item.id)"
                ></b-icon-trash>
              </div>
              <div class="product__detail--mobile">
                <div>{{ formatValue(item.price) }}</div>
                <div>
                  Qty:
                  <NumberInput
                    :value="item.quantity"
                    :max="item.stock_count"
                    @onChange="(val) => handleChangeQuantity(item.id, val)"
                  />
                </div>
              </div>
            </div>
          </div>
        </template>
        <template #cell(quantity)="{ item }">
          <div>
            <NumberInput
              :value="item.quantity"
              :max="item.stock_count"
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
          <b-button variant="outline-secondary" class="btn"
            >Continue Shopping<b-icon
              icon="arrow-right"
              style="margin-left: 8px"
            ></b-icon
          ></b-button>
        </router-link>
        <router-link to="/checkout">
          <b-button class="btn text-uppercase">cart confirmation</b-button>
        </router-link>
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
