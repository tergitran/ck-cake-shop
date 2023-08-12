<template>
  <b-navbar toggleable="sm" fixed="top" type="light" variant="light">
    <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>

    <b-navbar-brand>
      <router-link to="/"> CL CAKE </router-link>
    </b-navbar-brand>
    <b-navbar-brand class="cart">
      <router-link to="/cart">
        <div v-if="counter > 0" class="cart__counter">{{ counter }}</div>
        <b-icon icon="cart" style="width: 20px; height: 20px"></b-icon>
      </router-link>
    </b-navbar-brand>

    <b-collapse id="nav-text-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="/"><span>home</span></b-nav-item>
        <b-nav-item to="/products"><span>Products</span></b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script src="./script.js"></script>
<style src="./style.scss" lang="scss" scoped></style>
