<template>
  <span class="input-wrapper">
    <button @click="onChange(value - 1)">-</button>
    <input
      type="number"
      :min="min"
      :max="max"
      :value="value"
      @input="inputChange"
    />
    <button @click="onChange(value + 1)">+</button>
  </span>
</template>

<script src="./script.js"></script>
<style src="./style.scss" lang="scss" scoped></style>
