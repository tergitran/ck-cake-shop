<template>
  <div>
    <b-navbar toggleable="sm" fixed="top" type="light" variant="light">
      <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>

      <b-navbar-brand>
        <router-link to="/">
          CL CAKE
        </router-link>
      </b-navbar-brand>
      <b-navbar-brand class="cart">
          <b-icon icon="cart" style="width: 20px; height: 20px"></b-icon>
      </b-navbar-brand>

      <b-collapse id="nav-text-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/">Home</b-nav-item>
          <b-nav-item to="/products">Products</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <div style="margin-top: 56px">
      <slot></slot>
    </div>
  </div>
</template>

<script src="./script.js"></script>
<style src="./style.scss" lang="scss" scoped></style>